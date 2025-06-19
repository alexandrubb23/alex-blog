import { ENTITIES } from '@/app/api/lib/constants';
import hydratedPage, { type EntityProps } from '@/app/hydratedPage';

const Certificate = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.CERTIFICATIONS,
  });

export default Certificate;
