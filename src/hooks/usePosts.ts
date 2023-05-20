import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';
import { PageObject } from './usePage';

const usePosts = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axiosInstance
        .get<PageObject[]>('/posts/posts.json')
        .then(response => response.data),
  });

export default usePosts;
