import matter from 'gray-matter';
import type { NextRequest } from 'next/server';

import { Entity, PostData, RequestQueryParams } from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import getOnePost from '@/app/api/lib/sql/getOnePost';
import type { PostDataOrUndefined } from '@/app/api/lib/models/post-data.interface';

const parseData = (id: string, post: PostData) => {
  const matterResult = matter(post.content);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostData;
};

const getData = async (
  id: string,
  entity: Entity
): Promise<PostDataOrUndefined> => {
  const post = await getOnePost(entity, id);
  if (!post) return undefined;

  const result = parseData(id, post);
  return result;
};

export const GET = async (_: NextRequest, { params }: RequestQueryParams) => {
  const { entity, id } = await params;

  const response = await handleEntityRequestService(() => getData(id, entity));

  return response;
};
