import { singular } from 'pluralize';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Entity, PostData, QueryParams } from '@/app/api/lib/models';
import { factoryEntity } from '@/services';
import { usePostHref } from '../router';

interface EntityItemQuery {
  entity: Entity;
  params: QueryParams;
}

const useEntityItemQuery = ({ entity, params }: EntityItemQuery) => {
  const httpService = factoryEntity<PostData>(entity);

  const path = usePostHref({
    postType: '',
    id: params.id,
    topic: params.topic,
  });

  console.log({ path });

  const { id, topic } = params;

  return useQuery<PostData, Error>({
    queryKey: [singular(entity), topic, id],
    queryFn: () => httpService.findOne(path),
    staleTime: ms('24h'),
  });
};

export default useEntityItemQuery;
