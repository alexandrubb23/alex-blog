import { Entity } from '@/app/api/lib/models';
import { posts, topics } from '@/db/schema';
import { eq } from 'drizzle-orm';
import PlanetScale from './planetscale';

const getAllTopics = async (entity: Entity) => {
  const db = PlanetScale.connect();

  const results: Topic[] = await db
    .select({
      topic: topics.topic,
      description: topics.description,
    })
    .from(topics)
    .innerJoin(posts, eq(topics.id, posts.topicId))
    .where(eq(posts.postType, entity))
    .groupBy(topics.id);

  return results;
};

export default getAllTopics;
