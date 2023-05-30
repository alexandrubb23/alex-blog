import { APIResponse, PostData, QueryParams } from '@/app/api/lib/models';

interface EntityDataRepositoryInterface {
  getAll(): APIResponse[];
  findOne(params: QueryParams): Promise<PostData>;
}

export default EntityDataRepositoryInterface;