import { APIResponse, RequestQueryParams } from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import { EntityDataRepositoryInterface } from '@/app/api/lib/classes/EntityDataReader';

export const GET = async (_: Request, { params }: RequestQueryParams) =>
  handleEntityRequestService({
    dispatch: (entity: EntityDataRepositoryInterface): Promise<APIResponse[]> =>
      entity.getAll(),
    params,
  });
