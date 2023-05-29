import handleEntityRequestService, {
  Params,
} from '@/app/api/lib/services/handleEntityRequestService';
import { EntityService } from '@/app/api/lib/services/createEntityService';

export const GET = async (_: Request, { params }: { params: Params }) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityService) => entity.getAll(),
  });
