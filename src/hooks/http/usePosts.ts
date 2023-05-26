import { useQuery } from '@tanstack/react-query';

import { postsService } from '@/services';

const usePosts = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: postsService.getAll,
  });

export default usePosts;
