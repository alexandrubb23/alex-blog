import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { pageService } from '@/services';
import { PostData, QueryParams } from '@/app/api/lib/models';
import { QUERY_KEYS } from '@/app/constants';
import useEntitySlug from '@/hooks/router/useEntitySlug';

const usePage = (params: QueryParams) => {
  const { getSlug } = useEntitySlug();

  const { id, topic } = params;

  return useQuery<PostData, Error>({
    queryKey: [QUERY_KEYS.PAGE, topic, id],
    queryFn: () => pageService.findOne(getSlug(params)),
    staleTime: ms('24h'),
  });
};

export default usePage;
