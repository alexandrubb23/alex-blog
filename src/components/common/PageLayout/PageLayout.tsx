import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import '@/styles/prism-dracula.css';
import { HTTP_QUERY_KEYS } from '@/app/constants';
import { Layout } from '@/components/Layout';
import { PageContent } from '@/components/common';
import { QueryHookDataType } from '@/contexts/QueryHookContext';
import { QueryHookProvider } from '@/providers';
interface PageLayoutProps {
  className?: string;
  data: QueryHookDataType;
}

const PageLayout = ({ className, data }: PageLayoutProps) => {
  const searchParams = useSearchParams();

  const href = searchParams?.get(HTTP_QUERY_KEYS.PAGE_SOURCE);

  return (
    <QueryHookProvider data={data}>
      <Layout contentClassName={className}>
        <Box marginY={2}>
          <PageContent />
          <Link href={`/${href || ''}`}>← Back to {href || 'home'}</Link>
        </Box>
      </Layout>
    </QueryHookProvider>
  );
};

export default PageLayout;
