import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { pageService } from '@/services';
import { QUERY_KEYS } from '@/app/constants';
import { QueryParams } from '@/hooks/router/useEntitySlug';
import { PostData } from '@/app/api/lib/models';

const usePage = ({ id }: QueryParams) =>
  useQuery<PostData, Error>({
    queryKey: [QUERY_KEYS.PAGE, id],
    queryFn: () => pageService.findOne(`${id}.md`),
    staleTime: ms('24h'),
  });

export default usePage;
