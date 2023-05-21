import { useQuery } from '@tanstack/react-query';

import { PageObject } from './usePage';
import axiosInstance from '@/services/apiClient';

const useCertificate = (id: string) =>
  useQuery<PageObject, Error>({
    queryKey: ['certifications', id],
    queryFn: () =>
      axiosInstance
        .get<PageObject>(`/certifications/${id}.md`)
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useCertificate;
