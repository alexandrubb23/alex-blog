import { useQuery } from '@tanstack/react-query';

import { FetchResponse, pageService } from '@/services';

const usePage = (pageName: string) =>
  useQuery<FetchResponse, Error>({
    queryKey: ['page', pageName],
    queryFn: () => pageService.findOne(`${pageName}.md`),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePage;
