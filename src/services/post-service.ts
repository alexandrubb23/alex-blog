import { PostData } from '@/app/api/lib/models';
import APIClient from './api-client';
import { ENTITIES } from '@/app/api/lib/constants';

const postService = new APIClient<PostData>(`/${ENTITIES.POSTS}`);

export default postService;
