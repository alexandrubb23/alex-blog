import { APIResponse } from '@/app/api/lib/models';
import APIClient, { FetchResponse } from './api-client';

export interface Certificate {
  id: string;
  title: string;
  date: string;
  topic: string;
}

export interface Certification {
  id: string;
  icon: string;
  name: string;
  data: FetchResponse[];
}

const certificationsService = new APIClient<APIResponse[]>('/certifications');

export default certificationsService;
