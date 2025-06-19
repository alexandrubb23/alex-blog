import { QueryClient } from '@tanstack/react-query';

import { Entity } from '@/app/api/lib/models';
import getOnePost from '@/app/api/lib/sql/getOnePost';
import { getStaleTime } from '@/utils/api';
import getAndParseResponse from '@/utils/getAndParseResponse';
import { singular } from 'pluralize';

interface PrefetchEntityProps {
  entity: Entity;
  id: string;
}

const prefetchEntity = async ({ entity, id }: PrefetchEntityProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [singular(entity), id],
    queryFn: async () => {
      const response = await getOnePost(entity, id);
      if (!response) return null;

      const parsedResponse = await getAndParseResponse(entity, id);
      return parsedResponse;
    },
    staleTime: getStaleTime(),
  });

  return queryClient;
};

export default prefetchEntity;
