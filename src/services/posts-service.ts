import { APIResponse } from '@/app/api/lib/models';
import APIClient from './api-client';

const postsService = new APIClient<APIResponse[]>('/posts');

export default postsService;
