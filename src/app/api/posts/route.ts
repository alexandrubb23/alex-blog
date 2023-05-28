import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { FetchResponse } from '@/services';
import categories from '@/app/api/data/categories';
import { date, sortData } from '@/app/api/lib/utils';
import { APIResponse } from '@/app/api/lib/models';

const postsDirectory = path.join(process.cwd(), 'posts');

const getSortedPostsData = () => {
  const topics = fs.readdirSync(postsDirectory);

  const allPostsData = topics.reduce<APIResponse[]>((acc, topic) => {
    const category = categories.find(c => c.id.toLowerCase() === topic);
    if (!category) return acc;

    const fullTopicPath = path.join(postsDirectory, topic);
    const topicDir = fs.readdirSync(fullTopicPath);

    const posts = topicDir.reduce<FetchResponse[]>((posts, file) => {
      const id = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, `${topic}/${file}`);

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const post = {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as FetchResponse;

      posts.push(post);

      return posts;
    }, []);

    const item = {
      id: category.id,
      icon: category.icon,
      name: category.name,
      data: posts,
    };

    acc.push(item);

    return acc;
  }, []);

  return allPostsData.sort(sortData.sort);
};

export async function GET() {
  const posts = getSortedPostsData();

  return NextResponse.json(posts);
}
