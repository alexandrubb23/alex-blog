import { handleEntityRequestService } from '@/app/api/lib/services';
import { EntityService } from '@/app/api/lib/services/createEntityService';
import { EntityQueryParams } from '@/app/api/lib/models';

export const GET = async (
  _: Request,
  { params }: { params: EntityQueryParams }
) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityService) => entity.getAll(),
  });
