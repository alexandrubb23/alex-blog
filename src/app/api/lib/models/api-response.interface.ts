import PostData from './post-data.interface';

interface APIResponse {
  id: string;
  name: string;
  data: PostData[];
}

export default APIResponse;
