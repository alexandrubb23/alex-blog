import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { APIResponse, Entity } from '@/app/api/lib/models';
import APIClient from '@/services/api-client';

const useEntity = (entity: Entity) => {
  const httpService = new APIClient<APIResponse[]>(`/${entity}`);

  return useQuery<APIResponse[], Error>({
    queryKey: [entity],
    queryFn: httpService.getAll,
    staleTime: ms('24h'),
  });
};

export default useEntity;
