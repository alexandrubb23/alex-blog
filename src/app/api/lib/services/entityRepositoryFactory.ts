import {
  EntityDataRepositoryInterface,
  EntityMySQLRepository,
} from '@/app/api/lib/classes/EntityDataReader';
import { Entity } from '@/app/api/lib/models';

const entityRepositoryFactory = (
  entityName: Entity
): EntityDataRepositoryInterface => new EntityMySQLRepository(entityName);

export default entityRepositoryFactory;
