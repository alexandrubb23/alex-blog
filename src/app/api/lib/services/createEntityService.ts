import { EntityController } from '@/app/api/lib/classes/EntityDataReader';
import { QueryParams } from '@/hooks/router/useEntitySlug';

const createEntityService = (entityName: string) => {
  const entity = new EntityController(entityName);

  return {
    getAll: () => entity.getAll(),
    findOne: (params: QueryParams) => entity.findOne(params),
  };
};

export default createEntityService;
