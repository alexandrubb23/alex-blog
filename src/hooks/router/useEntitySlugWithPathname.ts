import useEntitySlug from './useEntitySlug';

const useEntitySlugWithPathname = (entity: 'posts' | 'certifications') => {
  const entitySlug = useEntitySlug(entity);

  return entitySlug;
};

export default useEntitySlugWithPathname;
