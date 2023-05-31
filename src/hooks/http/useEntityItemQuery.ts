import { singular } from 'pluralize';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Entity, PostData, QueryParams } from '@/app/api/lib/models';
import useEntitySlug from '@/hooks/router/useEntitySlug';
import { factoryEntity } from '@/services';

interface EntityItemQuery {
  entity: Entity;
  params: QueryParams;
}

const useEntityItemQuery = ({ entity, params }: EntityItemQuery) => {
  const httpService = factoryEntity<PostData>(entity);

  const { getSlug } = useEntitySlug();

  const { id, topic } = params;

  return useQuery<PostData, Error>({
    queryKey: [singular(entity), topic, id],
    queryFn: () => httpService.findOne(getSlug(params)),
    staleTime: ms('24h'),
  });
};

export default useEntityItemQuery;
