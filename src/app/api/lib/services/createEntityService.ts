import { EntityController } from '@/app/api/lib/classes/EntityDataReader';
import { APIResponse, PostData, QueryParams } from '@/app/api/lib/models';

export interface EntityService {
  getAll(): APIResponse[];
  findOne(params: QueryParams): Promise<PostData>;
}

const createEntityService = (entityName: string): EntityService => {
  const entity = new EntityController(entityName);

  return {
    getAll: () => entity.getAll(),
    findOne: (params: QueryParams) => entity.findOne(params),
  };
};

export default createEntityService;
