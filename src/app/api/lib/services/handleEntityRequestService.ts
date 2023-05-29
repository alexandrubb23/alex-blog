import { NextResponse } from 'next/server';

import createEntityService, { EntityService } from './createEntityService';
import { CustomError } from '@/app/api/lib/classes/Errors';
import { QueryParams } from '@/hooks/router/useEntitySlug';
import { APIResponse, Entity, PostData } from '@/app/api/lib/models';

export interface Params extends QueryParams {
  entity: Entity;
}

interface HandleEntityRequestService {
  params: Params;
  dispatch: (entity: EntityService) => APIResponse[] | Promise<PostData>;
}

const handleEntityRequestService = async ({
  params,
  dispatch,
}: HandleEntityRequestService) => {
  try {
    const entity = createEntityService(params.entity);
    const result = await dispatch(entity);

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
