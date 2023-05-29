import { NextResponse } from 'next/server';

import { CustomError } from '@/app/api/lib/classes/Errors';
import { APIResponse, EntityQueryParams, PostData } from '@/app/api/lib/models';
import createEntityService, { EntityService } from './createEntityService';

interface HandleEntityRequestService {
  params: EntityQueryParams;
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
