import { LRUCache } from 'lru-cache';

import {
  PlanetScaleDatabase,
  drizzle,
} from 'drizzle-orm/planetscale-serverless';

import { env } from '@/env';
import * as schema from '@/db/schema';

export type DB = PlanetScaleDatabase<typeof schema>;

const queryCache = new LRUCache<string, any>({
  max: 100,
  ttl: env.DATABASE_CACHE_TTL,
});

class PlanetScale {
  private static db: DB;

  // Private constructor to prevent direct instantiation.
  private constructor() {}

  /**
   * Establishes a connection to the Planetscale database and returns a singleton instance of the database object.
   * If a connection already exists, the existing instance is returned.
   *
   * @returns The Planetscale database object.
   * @throws Any connection or initialization errors.
   */
  static connect(): DB {
    if (!PlanetScale.db) {
      try {
        PlanetScale.db = drizzle(env.DATABASE_URL, { schema });
      } catch (error) {
        throw error;
      }
    }

    return PlanetScale.db;
  }

  /**
   * Caches the result of a query function based on a computed cache key.
   *
   * @param key Unique string representing the query (e.g., a hash of SQL + params).
   * @param queryFn Function to execute if result is not cached.
   * @param ttl Optional TTL in milliseconds (default: 1 min)
   */
  static async cachedQuery<T>(
    key: string,
    queryFn: () => Promise<T>,
    ttl?: number
  ) {
    const cached = queryCache.get(key) as T | undefined;
    if (cached !== undefined) {
      console.log(`Cache hit for ${key}`);
      return cached;
    }

    const result = await queryFn();
    queryCache.set(key, result, { ttl });
    return result;
  }
}

export default PlanetScale;
