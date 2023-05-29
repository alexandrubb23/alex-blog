import { APIResponse } from '@/app/api/lib/models';
import APIClient from './api-client';

const certificationsService = new APIClient<APIResponse[]>('/certifications');

export default certificationsService;
