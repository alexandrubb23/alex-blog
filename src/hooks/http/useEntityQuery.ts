import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { APIResponse, Entity } from '@/app/api/lib/models';
import { factoryEntity } from '@/services';

const useEntityQuery = (entity: Entity) => {
  const httpService = factoryEntity<APIResponse[]>(entity);

  return useQuery<APIResponse[], Error>({
    queryKey: [entity],
    queryFn: httpService.getAll,
    staleTime: ms('24h'),
  });
};

export default useEntityQuery;
