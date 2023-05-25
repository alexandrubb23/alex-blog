import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { HTTP_QUERY_KEYS } from '@/app/constants';
import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
import { QueryHookProvider } from '@/context';
import { QueryHookDataProvider } from '@/context/QueryHookContextProvider';
import '@/styles/prism-dracula.css';
interface PageLayoutProps {
  className?: string;
  query: QueryHookDataProvider;
}

const PageLayout = ({ className, query }: PageLayoutProps) => {
  const searchParams = useSearchParams();

  const href = searchParams.get(HTTP_QUERY_KEYS.PAGE_SOURCE);

  return (
    <QueryHookProvider.Provider value={query}>
      <Layout contentClassName={className}>
        <Box marginY={2}>
          <PageContent />
          <Link href={`/${href || ''}`}>← Back to {href || 'home'}</Link>
        </Box>
      </Layout>
    </QueryHookProvider.Provider>
  );
};

export default PageLayout;
