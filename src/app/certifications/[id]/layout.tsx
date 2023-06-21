import { AUTHOR } from '@/app/constants';
import { entityMetaData } from '@/utils';
import { PageMetadata } from '@/utils/pageMetadata';

const entityMetadata = (metadata: PageMetadata) => {
  return {
    ...metadata,
    description: `${metadata.description} certification - ${AUTHOR.NAME}`,
  };
};

export const generateMetadata = entityMetaData({
  entity: 'certifications',
  entityMetadata,
});

const CertificateLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default CertificateLayout;
