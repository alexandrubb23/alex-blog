import { useQuery } from '@tanstack/react-query';

import { FetchResponse, postService } from '@/services';
import useEntitySlug, { QueryParams } from './useEntitySlug';

const usePost = (post: QueryParams) => {
  const { getSlug } = useEntitySlug();

  const { id, topic } = post;

  return useQuery<FetchResponse, Error>({
    queryKey: ['post', topic, id],
    queryFn: () => postService.findOne(`${getSlug(post)}.md`),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePost;
