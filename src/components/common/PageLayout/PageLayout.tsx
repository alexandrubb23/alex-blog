import { Box } from '@chakra-ui/react';
import { UseQueryResult } from '@tanstack/react-query';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
import { QueryParams } from '@/hooks/useEntitySlug';
import { FetchResponse } from '@/services/api-client';
import '@/styles/prism-dracula.css';
import { QueryHookProvider } from '@/context';

interface PageLayoutProps {
  className?: string;
  backTo?: {
    href: string;
    text: string;
  };
  query: {
    params: QueryParams;
    queryHook: (params: QueryParams) => UseQueryResult<FetchResponse, Error>;
  };
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
