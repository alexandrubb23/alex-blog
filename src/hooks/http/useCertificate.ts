import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { FetchResponse, certificateService } from '@/services';
import useEntitySlug, { QueryParams } from '@/hooks/router/useEntitySlug';
import { QUERY_KEYS } from '@/app/constants';

const useCertificate = (params: QueryParams) => {
  const { id, topic } = params;

  const { getSlug } = useEntitySlug();

  return useQuery<FetchResponse, Error>({
    queryKey: [QUERY_KEYS.CETIFICATE, topic, id],
    queryFn: () => certificateService.findOne(`${getSlug(params)}.md`),
    staleTime: ms('24h')
  });
};

export default useCertificate;
