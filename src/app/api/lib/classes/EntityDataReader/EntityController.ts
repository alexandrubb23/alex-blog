import { NextResponse } from 'next/server';
import EntityDataReader from './EntityDataReader';
import { QueryParams } from '@/hooks/router/useEntitySlug';

class EntityController {
  private entityDataReader: EntityDataReader;

  constructor(private dirName: string) {
    this.entityDataReader = new EntityDataReader(this.dirName);
  }

  getAll = () => {
    return this.entityDataReader.readAll();
  };

  findOne = async (params: QueryParams) => {
    return this.entityDataReader.readOne(params);
  };
}

export default EntityController;
