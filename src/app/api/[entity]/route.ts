import matter from 'gray-matter';

import {
  APIResponse,
  Entity,
  PostData,
  RequestQueryParams,
} from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import { getAllPosts, getAllTopics } from '@/app/api/lib/sql';

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

const parseData = (topics: Topic[], posts: PostData[]): APIResponse[] => {
  const entityData = topics.reduce<APIResponse[]>(
    (entities, { topic, description }) => {
      const entity: APIResponse = {
        id: topic,
        name: description,
        data: traversePosts(topic, posts),
      };

      entities.push(entity);

      return entities;
    },
    []
  );

  return entityData;
};

const getData = async (entity: Entity): Promise<APIResponse[]> => {
  try {
    const posts = await getAllPosts(entity);
    const topics = await getAllTopics(entity);

    const parsedData = parseData(topics, posts);

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
