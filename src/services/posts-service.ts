import { APIResponse } from '@/app/api/lib/models';
import APIClient from './api-client';
import { ENTITIES } from '@/app/api/lib/constants';

const postsService = new APIClient<APIResponse[]>(`/${ENTITIES.POSTS}`);

export default postsService;
