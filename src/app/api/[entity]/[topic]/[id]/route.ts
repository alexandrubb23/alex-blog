import { NextResponse } from 'next/server';

import { CustomError } from '@/app/api/lib/classes/Errors';
import createEntityService from '@/app/api/lib/services/createEntityService';
import { QueryParams } from '@/hooks/router/useEntitySlug';
import { Entity } from '@/app/api/lib/models';

interface Params extends QueryParams {
  entity: Entity;
}

export async function GET(_: Request, { params }: { params: Params }) {
  try {
    const entity = createEntityService(params.entity);
    const result = await entity?.findOne(params);

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
