import {
  EntityController,
  EntityDataRepository,
  EntityDataRepositoryInterface,
} from '@/app/api/lib/classes/EntityDataReader';
import { QueryParams } from '@/app/api/lib/models';

const createEntityService = (
  entityName: string
): EntityDataRepositoryInterface => {
  const entityDataRepository = new EntityDataRepository(entityName);
  const entity = new EntityController(entityDataRepository);

  return {
    getAll: () => entity.getAll(),
    findOne: (params: QueryParams) => entity.findOne(params),
  };
};

export default createEntityService;
