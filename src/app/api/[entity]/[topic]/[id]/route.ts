import { EntityQueryParams } from '@/app/api/lib/models';
import {
  EntityService,
  handleEntityRequestService,
} from '@/app/api/lib/services';

export const GET = async (
  _: Request,
  { params }: { params: EntityQueryParams }
) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityService) => entity.findOne(params),
  });
