import { QueryParams } from '@/app/api/lib/models';
import EntityDataRepository from './EntityDataRepository';

class EntityController {
  private entityDataReader: EntityDataRepository;

  constructor(private dirName: string) {
    this.entityDataReader = new EntityDataRepository(this.dirName);
  }

  getAll = () => {
    return this.entityDataReader.readAll();
  };

  findOne = async (params: QueryParams) => {
    return this.entityDataReader.readOne(params);
  };
}

export default EntityController;
