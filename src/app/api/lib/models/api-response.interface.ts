import { FetchResponse } from '@/services/api-client';

interface APIResponse {
  id: string;
  icon: string;
  name: string;
  data: FetchResponse[];
}

export default APIResponse;
