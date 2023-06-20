import { NextResponse } from 'next/server';

import { HTTPStatusError } from '@/app/api/lib/classes/Errors';
import { APIResponse, EntityQueryParams, PostData } from '@/app/api/lib/models';
import createEntityService from './createEntityService';
import { EntityDataRepositoryInterface } from '@/app/api/lib/classes/EntityDataReader';

interface HandleEntityRequestService {
  params: EntityQueryParams;
  dispatch: (
    entity: EntityDataRepositoryInterface
  ) => Promise<APIResponse[]> | Promise<PostData>;
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
    if (error instanceof HTTPStatusError) {
      return new NextResponse(null, {
        status: error.statusCode,
        statusText: error.message,
      });
    }
  }
};

export default handleEntityRequestService;
