import { APIResponse } from '@/app/api/lib/models';
import APIClient from './api-client';

const exercisesService = new APIClient<APIResponse[]>('/exercises');

export default exercisesService;
