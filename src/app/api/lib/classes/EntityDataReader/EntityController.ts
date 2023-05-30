import { QueryParams } from '@/app/api/lib/models';
import EntityDataRepository from './EntityDataRepository';
import EntityDataRepositoryInterface from './EntityDataRepositoryInterface';

class EntityController {
  constructor(private entityDataRepository: EntityDataRepositoryInterface) {
    this.entityDataRepository = entityDataRepository;
  }

  getAll = () => {
    return this.entityDataRepository.getAll();
  };

  findOne = async (params: QueryParams) => {
    return this.entityDataRepository.findOne(params);
  };
}

export default EntityController;
