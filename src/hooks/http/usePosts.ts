import { useQuery } from '@tanstack/react-query';

import { postsService } from '@/services';
import { QUERY_KEYS } from '@/app/constants';

const usePosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: postsService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePosts;
