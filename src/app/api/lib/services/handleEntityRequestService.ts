import { NextResponse } from 'next/server';

import createEntityService from './createEntityService';
import { CustomError } from '@/app/api/lib/classes/Errors';
import { QueryParams } from '@/hooks/router/useEntitySlug';
import { Entity } from '@/app/api/lib/models';

export interface Params extends QueryParams {
  entity: Entity;
}

const handleEntityRequestService = async (params: Params, getAll = true) => {
  try {
    const entity = createEntityService(params.entity);
    const result = getAll ? entity.getAll() : await entity.findOne(params);

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
};

export default handleEntityRequestService;
