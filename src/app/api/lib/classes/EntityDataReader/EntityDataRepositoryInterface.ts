import { APIResponse, PostData, QueryParams } from '@/app/api/lib/models';

interface EntityDataRepositoryInterface {
  getAll(): Promise<APIResponse[]>;
  findOne(params: QueryParams): Promise<PostData>;
}

export default EntityDataRepositoryInterface;
