import { useQuery } from '@tanstack/react-query';

import axiosInstance, { FetchResponse } from '@/services/api-client';

const usePage = (pageName: string) =>
  useQuery<FetchResponse, Error>({
    queryKey: ['page', pageName],
    queryFn: async () =>
      axiosInstance
        .get<FetchResponse>(`/pages/${pageName}.md`)
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePage;
