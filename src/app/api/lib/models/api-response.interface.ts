import { FetchResponse } from '@/services/api-client';

export type Technology =
  | 'Docker'
  | 'Git'
  | 'HTML'
  | 'Java'
  | 'JavaScript'
  | 'MySQL'
  | 'NestJS'
  | 'NextJS'
  | 'NodeJS'
  | 'React'
  | 'Redux'
  | 'TypeScript';

interface APIResponse {
  id: Technology;
  icon: string;
  name: string;
  data: FetchResponse[];
}

export default APIResponse;
