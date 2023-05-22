import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';
import { PageObject } from './usePage';
import usePostSlug from './usePostSlug';

export type QueryParams = Pick<PageObject, 'id' | 'topic'>;

const usePost = (post: QueryParams) => {
  const { getPostSlug } = usePostSlug();

  const { id, topic } = post;

  return useQuery<PageObject, Error>({
    queryKey: ['post', topic, id],
    queryFn: () =>
      axiosInstance
        .get<PageObject>(`${getPostSlug(post)}.md`)
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePost;
