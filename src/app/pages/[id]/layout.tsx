import { AUTHOR } from '@/app/constants';
import { entityMetaData } from '@/utils';
import { PageMetadata } from '@/utils/pageMetadata';

const entityMetadata = (metadata: PageMetadata) => {
  return {
    ...metadata,
    description: `In this page, join ${AUTHOR.NAME} as he explores the topic of ${metadata.description}.`,
  };
};

export const generateMetadata = entityMetaData({
  entity: 'pages',
  entityMetadata,
});

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PageLayout;
