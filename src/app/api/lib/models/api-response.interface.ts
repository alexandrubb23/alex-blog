import PostData from './post-data.interface';

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
  data: PostData[];
}

export default APIResponse;
