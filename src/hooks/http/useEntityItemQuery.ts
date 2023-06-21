import { singular } from 'pluralize';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Entity, PostData, QueryParams } from '@/app/api/lib/models';
import { factoryEntity } from '@/services';
import { usePostHref } from '../router';

interface EntityItemQuery {
  entity: Entity;
  slug: QueryParams['id'];
}

const useEntityItemQuery = ({ entity, slug }: EntityItemQuery) => {
  const httpService = factoryEntity<PostData>(entity);

  const path = usePostHref({
    postType: '',
    id: slug,
  });

  return useQuery<PostData, Error>({
    queryKey: [singular(entity), slug],
    queryFn: () => httpService.findOne(path),
    staleTime: ms('24h'),
  });
};

export default useEntityItemQuery;
