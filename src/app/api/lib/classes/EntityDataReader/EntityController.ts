import { NextResponse } from 'next/server';
import EntityDataReader from './EntityDataReader';
import { QueryParams } from '@/hooks/router/useEntitySlug';

class EntityController {
  private entityDataReader: EntityDataReader;

  constructor(private dirName: string) {
    this.entityDataReader = new EntityDataReader(this.dirName);
  }

  getAll = () => {
    const data = this.entityDataReader.readAll();

    return NextResponse.json(data);
  };

  findOne = (params: QueryParams) => {
    const data = this.entityDataReader.readOne(params);

    return NextResponse.json(data);
  };
}

export default EntityController;
