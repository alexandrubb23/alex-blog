import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import path from 'path';

import { CustomError } from '@/app/api/lib/classes/Errors';
import { QueryParams } from '@/hooks/router/useEntitySlug';
import { FetchResponse } from '@/services';
import { checkEntityExist, readMarkdownFile } from '@/app/api/lib/utils';

const topicDirectory = path.join(process.cwd(), 'api/posts');

const getPost = async ({ id, topic }: QueryParams) => {
  const markdownFile = path.join(topicDirectory, topic as string, `${id}.md`);
  await checkEntityExist('Post', markdownFile);

  const markdownFileContents = await readMarkdownFile(markdownFile);
  const matterResult = matter(markdownFileContents);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as FetchResponse;
};

export async function GET(
  request: Request,
  { params }: { params: QueryParams }
) {
  try {
    const post = await getPost({ ...params });
    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
}
