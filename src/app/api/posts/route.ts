import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FetchResponse } from '@/services';

const postsDirectory = path.join(process.cwd(), 'posts');

const getSortedPostsData = () => {
  const topics = fs.readdirSync(postsDirectory);

  const allPostsData = topics.reduce((acc, topic) => {
    const fullTopicPath = path.join(postsDirectory, topic);
    const topicDir = fs.readdirSync(fullTopicPath);

    for (const file of topicDir) {
      const id = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, `${topic}/${file}`);

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const post = {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as FetchResponse;

      acc.push(post);
    }

    return acc;
  }, [] as FetchResponse[]);

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });
};

export async function GET() {
  const posts = getSortedPostsData();

  return NextResponse.json(posts);
}
