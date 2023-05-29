import { PostData } from '@/app/api/lib/models';
import APIClient from './api-client';

const certificateService = new APIClient<PostData>('/certifications');

export default certificateService;
