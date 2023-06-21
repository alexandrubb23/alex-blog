import { Entity, PostData } from '@/app/api/lib/models';
import { posts, topics } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import Planetscale from './planetscale';

const getOnePost = async (
  entity: Entity,
  slug: string
): Promise<PostData[]> => {
  const db = Planetscale.connect();

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

  return result;
};

export default getOnePost;
