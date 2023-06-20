import matter from 'gray-matter';

import {
  APIResponse,
  Entity,
  PostData,
  QueryParams,
} from '@/app/api/lib/models';
import { sortData } from '@/app/api/lib/utils';
import getAllPosts from '@/app/api/lib/sql/getAllPosts';
import getAllTopics from '@/app/api/lib/sql/getAllTopics';
import getOnePost from '@/app/api/lib/sql/getOnePost';
import EntityDataRepositoryInterface from './EntityDataRepositoryInterface';

class EntityMySQLRepository implements EntityDataRepositoryInterface {
  constructor(private readonly entity: Entity) {}

  getAll = async (): Promise<APIResponse[]> => {
    const posts = await getAllPosts(this.entity);
    const topics = await getAllTopics(this.entity);

    const entityData = topics.reduce<APIResponse[]>(
      (entities, { topic, description }) => {
        const entity: APIResponse = {
          id: topic,
          name: description,
          data: this.traversePosts(topic, posts),
        };

        entities.push(entity);

        return entities;
      },
      []
    );

    return entityData.sort(sortData.sort);
  };

  findOne = async ({ id }: QueryParams) => {
    const post = await getOnePost(this.entity, id);
    const matterResult = matter(post[0].content);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    } as PostData;
  };

  private traversePosts = (topic: string, posts: PostData[]) => {
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
}

export default EntityMySQLRepository;
