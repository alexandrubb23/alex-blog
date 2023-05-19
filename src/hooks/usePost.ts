import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';
import { Post } from './usePosts';

const usePost = (id: string) =>
  useQuery<Post, Error>({
    queryKey: ['post', id],
    queryFn: () =>
      axiosInstance.get<Post>(`/posts/${id}.md`).then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePost;
