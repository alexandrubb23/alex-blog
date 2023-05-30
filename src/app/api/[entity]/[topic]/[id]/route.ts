import { EntityDataRepositoryInterface } from '@/app/api/lib/classes/EntityDataReader';
import { RequestQueryParams } from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';

export const GET = async (_: Request, { params }: RequestQueryParams) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityDataRepositoryInterface) => entity.findOne(params),
  });
