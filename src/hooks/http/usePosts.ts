import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { postsService } from '@/services';
import { QUERY_KEYS } from '@/app/constants';

const usePosts = () =>
  useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: postsService.getAll,
    staleTime: ms('24h'),
  });

export default usePosts;
