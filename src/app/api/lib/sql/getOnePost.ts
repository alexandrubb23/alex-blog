import { and, eq } from 'drizzle-orm';

import { Entity, PostData } from '@/app/api/lib/models';
import { NotFoundError } from '@/app/api/lib/classes/Errors';
import { posts, topics } from '@/db/schema';
import PlanetScale from './planetscale';

const getOnePost = async (entity: Entity, slug: string): Promise<PostData> => {
  const db = PlanetScale.connect();

  const result: PostData[] = await db
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
    .where(and(eq(posts.postType, entity), eq(posts.slug, slug)));

  if (result.length === 0) {
    throw new NotFoundError('The post with the given id not found.');
  }

  return result[0];
};

export default getOnePost;
