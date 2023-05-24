import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
import { QueryHookProvider } from '@/context';
import { QueryHookDataProvider } from '@/context/QueryHookContextProvider';
import '@/styles/prism-dracula.css';

interface PageLayoutProps {
  className?: string;
  backTo?: {
    href: string;
    text: string;
  };
  query: QueryHookDataProvider
}

const PageLayout = ({
  backTo = { href: '/', text: 'home' },
  className,
  query,
}: PageLayoutProps) => {
  return (
    <QueryHookProvider.Provider value={query}>
      <Layout contentClassName={className}>
        <Box marginY={2}>
          <PageContent />
          <Link href={backTo.href}>← Back to {backTo.text}</Link>
        </Box>
      </Layout>
    </QueryHookProvider.Provider>
  );
};

export default PageLayout;
