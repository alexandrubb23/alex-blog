import { desc, eq } from 'drizzle-orm';

import { Entity } from '@/app/api/lib/models';
import { topics } from '@/db/schema';
import PlanetScale from './planetscale';
import { getPostsAccessSQL } from './getAllPosts';

// TODO: This is not in use anymore, but it is still needed later for the new design.
const getAllTopics = async (entity: Entity) => {
  const queryFn = async () => {
    const db = PlanetScale.connect();

    const postsSQL = getPostsAccessSQL(db, entity);

    const { description, id, topic } = topics;

    const results: Topic[] = await db
      .select({ topic, description })
      .from(topics)
      .innerJoin(postsSQL, eq(id, postsSQL.topicId))
      .orderBy(desc(postsSQL.date));

    return results;
  };

  return PlanetScale.cachedQuery(`topics:${entity}`, queryFn);
};

export default getAllTopics;
