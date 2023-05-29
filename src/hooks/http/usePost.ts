import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { postService } from '@/services';
import useEntitySlug, { QueryParams } from '@/hooks/router/useEntitySlug';
import { QUERY_KEYS } from '@/app/constants';
import { PostData } from '@/app/api/lib/models';

const usePost = (params: QueryParams) => {
  const { getSlug } = useEntitySlug();

  const { id, topic } = params;

  return useQuery<PostData, Error>({
    queryKey: [QUERY_KEYS.POST, topic, id],
    queryFn: () => postService.findOne(getSlug(params)),
    staleTime: ms('24h'),
  });
};

export default usePost;
