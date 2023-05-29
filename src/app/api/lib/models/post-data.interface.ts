import { Technology } from './api-response.interface';

interface PostData {
  content: string;
  date: string;
  id: string;
  title: string;
  topic: Technology;
}

export default PostData;
