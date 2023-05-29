import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { certificateService } from '@/services';
import useEntitySlug, { QueryParams } from '@/hooks/router/useEntitySlug';
import { QUERY_KEYS } from '@/app/constants';
import { PostData } from '@/app/api/lib/models';

const useCertificate = (params: QueryParams) => {
  const { id, topic } = params;

  const { getSlug } = useEntitySlug();

  return useQuery<PostData, Error>({
    queryKey: [QUERY_KEYS.CETIFICATE, topic, id],
    queryFn: () => certificateService.findOne(`${getSlug(params)}.md`),
    staleTime: ms('24h'),
  });
};

export default useCertificate;
