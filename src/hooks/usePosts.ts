import { useQuery } from '@tanstack/react-query';

import axiosInstance, { FetchResponse } from '@/services/api-client';

const usePosts = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axiosInstance
        .get<FetchResponse[]>('/posts/posts.json')
        .then(response => response.data),
  });

export default usePosts;
