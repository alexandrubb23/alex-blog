import { Entity } from '@/app/api/lib/models';
import useEntitySlug from './useEntitySlug';

const useEntitySlugWithPathname = (entity: Entity) => {
  const entitySlug = useEntitySlug(entity);

  return entitySlug;
};

export default useEntitySlugWithPathname;
