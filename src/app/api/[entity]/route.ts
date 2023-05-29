import { RequestQueryParams } from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import { EntityService } from '@/app/api/lib/services/createEntityService';

export const GET = async (_: Request, { params }: RequestQueryParams) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityService) => entity.getAll(),
  });
