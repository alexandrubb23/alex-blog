import { usePathname } from 'next/navigation';

import { useEntitySlug } from '@/hooks';

const useEntitySlugWithPathname = () => {
  const pathName = usePathname();

  const entity = pathName.replace(/\//g, '');
  const entitySlug = useEntitySlug(entity);

  return entitySlug;
};

export default useEntitySlugWithPathname;
