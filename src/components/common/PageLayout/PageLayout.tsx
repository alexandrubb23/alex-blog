import { Box } from '@chakra-ui/react';

import '@/styles/prism-themes.css';

import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
import { BackToPreviousLocationLink } from '../Link/BackToPreviousLocationLink';
interface PageLayoutProps {
  className?: string;
}

const PageLayout = ({ className }: PageLayoutProps) => {
  return (
    <Layout contentClassName={className}>
      <Box marginY={2}>
        <PageContent />
        <BackToPreviousLocationLink />
      </Box>
    </Layout>
  );
};

export default PageLayout;
