import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';

export interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
}

const usePosts = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axiosInstance
        .get<Post[]>('/posts/posts.json')
        .then(response => response.data),
  });

export default usePosts;
