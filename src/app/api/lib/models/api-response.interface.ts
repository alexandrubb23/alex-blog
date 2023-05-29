import PostData from './post-data.interface';
import Technology from './technology.type';

interface APIResponse {
  id: Technology;
  icon: string;
  name: string;
  data: PostData[];
}

export default APIResponse;
