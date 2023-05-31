import { Box } from '@chakra-ui/react';

import '@/styles/prism-dracula.css';
import { BackToPreviousLocationLink } from '../Link/BackToPreviousLocationLink';
import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
import { QueryHookDataType } from '@/contexts/QueryHookContext';
import { QueryHookProvider } from '@/providers';
interface PageLayoutProps {
  className?: string;
  value: QueryHookDataType;
}

const PageLayout = ({ className, value }: PageLayoutProps) => {
  return (
    <QueryHookProvider value={value}>
      <Layout contentClassName={className}>
        <Box marginY={2}>
          <PageContent />
          <BackToPreviousLocationLink />
        </Box>
      </Layout>
    </QueryHookProvider>
  );
};

export default PageLayout;
