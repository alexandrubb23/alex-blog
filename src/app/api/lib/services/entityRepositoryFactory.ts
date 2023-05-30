import {
  EntityDataRepositoryInterface,
  EntityFileSystemRepository,
} from '@/app/api/lib/classes/EntityDataReader';
import { Entity } from '@/app/api/lib/models';

const entityRepositoryFactory = (
  entityName: Entity
): EntityDataRepositoryInterface => new EntityFileSystemRepository(entityName);

export default entityRepositoryFactory;
