import { Entity, PostData } from '@/app/api/lib/models';
import { posts, topics } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import Planetscale from './planetscale';

const getAllPosts = async (entity: Entity): Promise<PostData[]> => {
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
