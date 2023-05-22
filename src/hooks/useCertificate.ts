import { useQuery } from '@tanstack/react-query';

import { PageObject } from './usePage';
import axiosInstance from '@/services/apiClient';
import useEntitySlug, { QueryParams } from './useEntitySlug';

const useCertificate = (params: QueryParams) => {
  const { id, topic } = params;

  const { getSlug } = useEntitySlug('certifications');

  return useQuery<PageObject, Error>({
    queryKey: ['certifications', topic, id],
    queryFn: () =>
      axiosInstance
        .get<PageObject>(`${getSlug(params)}.md`)
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useCertificate;
