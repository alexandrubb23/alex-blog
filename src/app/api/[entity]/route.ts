import handleEntityRequestService, {
  Params,
} from '@/app/api/lib/services/handleEntityRequestService';

export const GET = async (_: Request, { params }: { params: Params }) =>
  handleEntityRequestService(params);
