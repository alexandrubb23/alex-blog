import { NextResponse } from 'next/server';

import { createEntityService } from '@/app/api/lib/services';
import { Entity } from '@/app/api/lib/models';

interface EntityParams {
  params: {
    entity: Entity;
  };
}

export async function GET(_: Request, { params }: EntityParams) {
  const entity = createEntityService(params.entity);

  const result = entity.getAll();

  return NextResponse.json(result);
}
