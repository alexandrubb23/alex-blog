import { useQuery } from '@tanstack/react-query';

import { FetchResponse, postService } from '@/services';
import useEntitySlug, { QueryParams } from '@/hooks/router/useEntitySlug';
import { QUERY_KEYS } from '@/app/constants';

const usePost = (params: QueryParams) => {
  const { getSlug } = useEntitySlug();

  const { id, topic } = params;

  return useQuery<FetchResponse, Error>({
    queryKey: [QUERY_KEYS.POST, topic, id],
    queryFn: () => postService.findOne(`${getSlug(params)}.md`),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePost;
