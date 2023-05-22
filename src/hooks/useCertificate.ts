import { useQuery } from '@tanstack/react-query';

import axiosInstance, { FetchResponse } from '@/services/api-client';
import useEntitySlug, { QueryParams } from './useEntitySlug';

const useCertificate = (params: QueryParams) => {
  const { id, topic } = params;

  const { getSlug } = useEntitySlug('certifications');

  return useQuery<FetchResponse, Error>({
    queryKey: ['certifications', topic, id],
    queryFn: () =>
      axiosInstance
        .get<FetchResponse>(`${getSlug(params)}.md`)
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useCertificate;
