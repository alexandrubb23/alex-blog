import { desc, eq, sql } from 'drizzle-orm';

import { NotFoundError } from '@/app/api/lib/classes/Errors';
import { ENTITIES } from '@/app/api/lib/constants';
import { Entity, PostData } from '@/app/api/lib/models';
import { posts, topics } from '@/db/schema';
import PlanetScale, { type DB } from './planetscale';

const getAllPosts = async (entity: Entity): Promise<PostData[]> => {
  const queryFn = async () => {
    const entities = Object.values(ENTITIES);
    if (!entities.find(e => e === entity)) {
      throw new NotFoundError('The provided entity is not valid.');
    }

    const db = PlanetScale.connect();

    const results: PostData[] = await db
      .select({
        id: posts.slug,
        title: posts.title,
        date: posts.date,
        content: posts.content,
        topic: topics.topic,
        description: topics.description,
        postType: posts.postType,
      })
      .from(posts)
      .innerJoin(topics, eq(posts.topicId, topics.id))
      .where(eq(posts.postType, entity))
      .orderBy(desc(posts.date));

    return results;
  };

  return PlanetScale.cachedQuery(entity, queryFn);
};

export const getPostsAccessSQL = (db: DB, entity: Entity) => {
  const { date, postType, topicId } = posts;

  const fields = {
    topicId,
    date: sql<string>`MAX(${date})`.as('latestDate'),
  };

  const postTypeEqEntity = eq(postType, entity);

  return db
    .select(fields)
    .from(posts)
    .where(postTypeEqEntity)
    .groupBy(topicId)
    .as('postsSQL');
};

export default getAllPosts;
