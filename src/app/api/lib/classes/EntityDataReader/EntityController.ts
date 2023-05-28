import { NextResponse } from 'next/server';
import EntityDataReader from './EntityDataReader';

class EntityController {
  private entityDataReader: EntityDataReader;

  constructor(private dirName: string) {
    this.entityDataReader = new EntityDataReader(this.dirName);
  }

  getAll = () => {
    const data = this.entityDataReader.read();

    return NextResponse.json(data);
  };
}

export default EntityController;
