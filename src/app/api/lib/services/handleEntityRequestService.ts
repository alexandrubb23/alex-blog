import { NextResponse } from 'next/server';

import { HTTPStatusError } from '@/app/api/lib/classes/Errors';
import { APIResponse, EntityQueryParams, PostData } from '@/app/api/lib/models';
import createEntityService from './createEntityService';
import { EntityDataRepositoryInterface } from '@/app/api/lib/classes/EntityDataReader';

interface HandleEntityRequestService {
  params: EntityQueryParams;
  dispatch: (
    entity: EntityDataRepositoryInterface
  ) => APIResponse[] | Promise<PostData>;
}

const handleEntityRequestService = async ({
  params,
  dispatch,
}: HandleEntityRequestService) => {
  try {
    const entity = createEntityService(params.entity);
    const result = await dispatch(entity);

    return new NextResponse(JSON.stringify(result), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
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
