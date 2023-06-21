import { entityMetaData } from '@/utils';
import { PageMetadata } from '@/utils/pageMetadata';

const entityMetadata = (metadata: PageMetadata) => metadata;

export const generateMetadata = entityMetaData({
  entity: 'pages',
  entityMetadata,
});

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PageLayout;
