import { handleEntityRequestService } from '@/app/api/lib/services';
import { Params } from '@/app/api/lib/services/handleEntityRequestService';

export const GET = async (_: Request, { params }: { params: Params }) =>
  handleEntityRequestService(params, false);
