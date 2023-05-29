import { handleEntityRequestService } from '@/app/api/lib/services';
import { EntityService } from '@/app/api/lib/services/createEntityService';
import { Params } from '@/app/api/lib/services/handleEntityRequestService';

export const GET = async (_: Request, { params }: { params: Params }) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityService) => entity.findOne(params),
  });
