import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/services/apiClient';

export interface Page {
  content: string;
  date: string;
  id: string;
  title: string;
}

const usePage = (pageName: string) =>
  useQuery<Page, Error>({
    queryKey: ['page', pageName],
    queryFn: async () =>
      axiosInstance.get<Page>(`/pages/${pageName}.md`).then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePage;
