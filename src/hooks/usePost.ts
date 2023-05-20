import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';
import { PageObject } from './usePage';

const usePost = (id: string) =>
  useQuery<PageObject, Error>({
    queryKey: ['post', id],
    queryFn: () =>
      axiosInstance
        .get<PageObject>(`/posts/${id}.md`)
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePost;
