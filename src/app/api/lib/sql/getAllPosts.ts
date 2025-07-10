import { SQL, and, desc, eq, ne, sql } from "drizzle-orm";

import { NotFoundError } from "@/app/api/lib/classes/Errors";
import { ENTITIES } from "@/app/api/lib/constants";
import { Entity, PostData, Technology } from "@/app/api/lib/models";
import { posts, topics } from "@/db/schema";
import PlanetScale, { type DB } from "./planetscale";

export type QueryFilter = {
  limit?: string;
  excludePost?: string;
  topic?: Technology;
};

export type GetAllPosts = {
  entity: Entity;
  queryFilter?: QueryFilter;
};

const DEFAULT_POST_LIMIT = 100;

const getAllPosts = async ({
  entity,
  queryFilter,
}: GetAllPosts): Promise<PostData[]> => {
  let cacheKey = `${entity}:${Object.values(queryFilter || {}).join(
    ":",
  )}`.toLowerCase();

  const queryFn = async () => {
    const entities = Object.values(ENTITIES);
    if (!entities.find((e) => e === entity)) {
      throw new NotFoundError("The provided entity is not valid.");
    }

    const db = PlanetScale.connect();

    const limit = queryFilter?.limit
      ? parseInt(queryFilter.limit, 10)
      : DEFAULT_POST_LIMIT;

    const results: PostData[] = (await db
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
      .where(
        and(
          eq(posts.postType, entity),
          ...(queryFilter?.topic ? [eq(topics.topic, queryFilter.topic)] : []),
          ...(queryFilter?.excludePost
            ? [ne(posts.slug, queryFilter.excludePost)]
            : []),
        ),
      )
      .limit(limit)
      .orderBy(desc(posts.date))) as PostData[];

    return results;
  };

  return PlanetScale.cachedQuery(cacheKey, queryFn);
};

export const getPostsAccessSQL = (db: DB, entity: Entity) => {
  const { date, postType, topicId } = posts;

  const fields = {
    topicId,
    date: sql<string>`MAX(${date})`.as("latestDate"),
  };

  const postTypeEqEntity = eq(postType, entity);

  return db
    .select(fields)
    .from(posts)
    .where(postTypeEqEntity)
    .groupBy(topicId)
    .as("postsSQL");
};

export default getAllPosts;
