import { PostData } from '@/app/api/lib/models';
import APIClient from './api-client';

const postService = new APIClient<PostData>('/posts');

export default postService;
