import { Box } from '@chakra-ui/react';

import '@/styles/prism-dracula.css';

import { BackToPreviousLocationLink } from '../Link/BackToPreviousLocationLink';
import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
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
