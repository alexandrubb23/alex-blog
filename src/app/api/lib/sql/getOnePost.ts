import { and, eq } from 'drizzle-orm';

import { Entity, PostData } from '@/app/api/lib/models';

import { posts, topics } from '@/db/schema';
import PlanetScale from './planetscale';

const getOnePost = async (entity: Entity, slug: string): Promise<PostData> => {
  const cacheKey = `${entity}:${slug}`;

  const queryFn = async () => {
    const db = PlanetScale.connect();
    const result = await db
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
      .where(and(eq(posts.postType, entity), eq(posts.slug, slug)))
      .limit(1);

    return result[0];
  };

  return PlanetScale.cachedQuery(cacheKey, queryFn);
};

export default getOnePost;
