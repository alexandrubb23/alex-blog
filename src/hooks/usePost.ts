import { useQuery } from '@tanstack/react-query';

import axiosInstance, { FetchResponse } from '@/services/api-client';
import { QueryParams } from './useEntitySlug';
import usePostSlug from './usePostSlug';

const usePost = (post: QueryParams) => {
  const { getSlug } = usePostSlug();

  const { id, topic } = post;

  return useQuery<FetchResponse, Error>({
    queryKey: ['post', topic, id],
    queryFn: () =>
      axiosInstance
        .get<FetchResponse>(`${getSlug(post)}.md`)
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePost;
