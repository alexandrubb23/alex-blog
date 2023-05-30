import { AUTHOR } from '@/app/constants';
import { entityMetaData } from '@/utils';
import { PageMetadata } from '@/utils/pageMetadata';

const entityMetadata = (metadata: PageMetadata) => {
  return {
    ...metadata,
    description: `In this article, join ${AUTHOR.NAME} as he explores the topic of ${metadata.description}.`,
  };
};

export const generateMetadata = entityMetaData({
  entity: 'posts',
  entityMetadata,
});

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PostLayout;
