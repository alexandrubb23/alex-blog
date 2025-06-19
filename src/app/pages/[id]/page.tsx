import { ENTITIES } from '@/app/api/lib/constants';
import hydratedPage, { type EntityProps } from '@/app/hydratedPage';

const Page = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.PAGES,
  });

export default Page;
