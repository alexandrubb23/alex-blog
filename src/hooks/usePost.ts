import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';
import { PageObject } from './usePage';
import useEntitySlug, { QueryParams } from './useEntitySlug';

const usePost = (post: QueryParams) => {
  const { getSlug } = useEntitySlug('posts');

  const { id, topic } = post;

  return useQuery<PageObject, Error>({
    queryKey: ['post', topic, id],
    queryFn: () =>
      axiosInstance
        .get<PageObject>(`${getSlug(post)}.md`)
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePost;
