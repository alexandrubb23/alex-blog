import matter from 'gray-matter';

import {
  APIResponse,
  Entity,
  PostData,
  RequestQueryParams,
} from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import { getAllPosts } from '@/app/api/lib/sql';

const traversePosts = (topic: string, posts: PostData[]) => {
  return posts.reduce<PostData[]>((posts, post) => {
    if (topic !== post.topic) return posts;

    const matterResult = matter(post.content);

    const newPost = {
      id: post.id,
      content: matterResult.content,
      postType: post.postType,
      title: matterResult.data.title,
      date: matterResult.data.date,
      topic: matterResult.data.topic,
    } as PostData;

    posts.push(newPost);

    return posts;
  }, []);
};

const parseData = (posts: PostData[]): APIResponse[] => {
  const seen = new Set<string>();
  const result: APIResponse[] = [];

  for (const post of posts) {
    if (!seen.has(post.topic)) {
      seen.add(post.topic);

      result.push({
        id: post.topic,
        name: post.description,
        data: traversePosts(post.topic, posts),
      });
    }
  }

  return result;
};

const getData = async (entity: Entity): Promise<APIResponse[]> => {
  try {
    const posts = await getAllPosts(entity);
    const parsedData = parseData(posts);

    return parsedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const GET = async (_: Request, { params }: RequestQueryParams) => {
  const response = await handleEntityRequestService(async () => {
    const promiseParams = await params;
    return getData(promiseParams.entity);
  });

  return response;
};
