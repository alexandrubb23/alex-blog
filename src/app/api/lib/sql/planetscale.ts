import { config } from '@/db/config';
import { connect } from '@planetscale/database';
import {
  PlanetScaleDatabase,
  drizzle,
} from 'drizzle-orm/planetscale-serverless';

/**
 * Provides a connection to the Planetscale database.
 */
class Planetscale {
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
    if (!Planetscale.db) {
      try {
        const connection = connect(config);
        Planetscale.db = drizzle(connection);
      } catch (error) {
        // Handle connection errors and initialization errors.
        throw new Error('Failed to connect to the Planetscale database.');
      }
    }

    return Planetscale.db;
  }
}

export default Planetscale;
