import { desc, eq } from 'drizzle-orm';

import { Entity, PostData } from '@/app/api/lib/models';
import { posts, topics } from '@/db/schema';
import Planetscale from './planetscale';
import { NotFoundError } from '@/app/api/lib/classes/Errors';
import { ENTITIES } from '@/app/api/lib/constants';

const getAllPosts = async (entity: Entity): Promise<PostData[]> => {
  const entities = Object.values(ENTITIES);
  if (!entities.find(e => e === entity)) {
    throw new NotFoundError('The provided entity is not valid.');
  }

  const db = Planetscale.connect();

  const results: PostData[] = await db
    .select({
      id: posts.slug,
      title: posts.title,
      date: posts.date,
      content: posts.content,
      topic: topics.topic,
      postType: posts.postType,
    })
    .from(posts)
    .innerJoin(topics, eq(posts.topicId, topics.id))
    .where(eq(posts.postType, entity))
    .orderBy(desc(posts.date));

  return results;
};

export default getAllPosts;
