import { PostData } from '@/app/api/lib/models';
import APIClient from './api-client';

const pageService = new APIClient<PostData>('/pages');

export default pageService;
