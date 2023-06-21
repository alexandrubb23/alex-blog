import matter from 'gray-matter';

import {
  APIResponse,
  Entity,
  PostData,
  RequestQueryParams,
} from '@/app/api/lib/models';
import { getAllPosts, getAllTopics } from '@/app/api/lib/sql';
import { handleEntityRequestService } from '@/app/api/lib/services';
import { sortData } from '@/app/api/lib/utils';

const traversePosts = (topic: string, posts: PostData[]) => {
  return posts.reduce<PostData[]>((posts, post) => {
    if (topic !== post.topic) return posts;

    const matterResult = matter(post.content);

    const newPost = {
      id: post.id,
      content: matterResult.content,
      ...matterResult.data,
    } as PostData;

    posts.push(newPost);

    return posts;
  }, []);
};

const parseData = async (
  topics: Topic[],
  posts: PostData[]
): Promise<APIResponse[]> => {
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

  return entityData.sort(sortData.sort);
};

const getData = async (entity: Entity): Promise<APIResponse[]> => {
  const posts = await getAllPosts(entity);
  const topics = await getAllTopics(entity);

  const parsedData = parseData(topics, posts);

  return parsedData;
};

export const GET = async (_: Request, { params }: RequestQueryParams) => {
  const response = await handleEntityRequestService(() =>
    getData(params.entity)
  );

  return response;
};
