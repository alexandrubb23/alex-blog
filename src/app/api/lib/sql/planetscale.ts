import { config } from '@/db/config';
import { connect } from '@planetscale/database';
import {
  PlanetScaleDatabase,
  drizzle,
} from 'drizzle-orm/planetscale-serverless';

/**
 * Provides a connection to the Planetscale database.
 */
class PlanetScale {
  private static db: PlanetScaleDatabase;

  private constructor() {
    // Private constructor to prevent direct instantiation.
  }

  /**
   * Establishes a connection to the Planetscale database and returns a singleton instance of the database object.
   * If a connection already exists, the existing instance is returned.
   *
   * @returns The Planetscale database object.
   * @throws Any connection or initialization errors.
   */
  static connect(): PlanetScaleDatabase {
    if (!PlanetScale.db) {
      try {
        const connection = connect(config);
        PlanetScale.db = drizzle(connection);
      } catch (error) {
        throw error;
      }
    }

    return PlanetScale.db;
  }
}

export default PlanetScale;
