import { NextResponse } from 'next/server';

import { createEntityService } from '@/app/api/lib/services';
import { Entity } from '@/app/api/lib/models';
import { CustomError } from '@/app/api/lib/classes/Errors';

interface EntityParams {
  params: {
    entity: Entity;
  };
}

export async function GET(_: Request, { params }: EntityParams) {
  try {
    const entity = createEntityService(params.entity);
    const result = entity.getAll();

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
}
