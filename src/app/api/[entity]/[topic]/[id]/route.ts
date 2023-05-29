import {
  EntityService,
  handleEntityRequestService,
  Params,
} from '@/app/api/lib/services';

export const GET = async (_: Request, { params }: { params: Params }) =>
  handleEntityRequestService({
    params,
    dispatch: (entity: EntityService) => entity.findOne(params),
  });
