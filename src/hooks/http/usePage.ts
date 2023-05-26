import { useQuery } from '@tanstack/react-query';

import { FetchResponse, pageService } from '@/services';
import { QUERY_KEYS } from '@/app/constants';
import { QueryParams } from '@/hooks/router/useEntitySlug';

const usePage = ({ id }: QueryParams) =>
  useQuery<FetchResponse, Error>({
    queryKey: [QUERY_KEYS.PAGE, id],
    queryFn: () => pageService.findOne(`${id}.md`),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePage;
