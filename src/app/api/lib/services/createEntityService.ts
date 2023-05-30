import {
  EntityController,
  EntityDataRepositoryInterface,
} from '@/app/api/lib/classes/EntityDataReader';
import { Entity } from '@/app/api/lib/models';
import entityRepositoryFactory from './entityRepositoryFactory';

const createEntityService = (
  entityName: Entity
): EntityDataRepositoryInterface =>
  new EntityController(entityRepositoryFactory(entityName));

export default createEntityService;
