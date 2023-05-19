'use client';

import { Box, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { CenteredSpinner, ErrorAlert } from '@/components/common';
import useParsePage from '@/hooks/useParsePage';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { page, isLoading, error } = useParsePage(params.id);

  if (error) {
    return <ErrorAlert error={error.message} />;
  }

  if (isLoading) {
    return <CenteredSpinner />;
  }

  return (
    <Layout>
      <VStack spacing={5} alignItems='flex-start'>
        <Box dangerouslySetInnerHTML={{ __html: page.content }} />
        <Box marginY={2}>
          <Link href='/'>← Back to home</Link>
        </Box>
      </VStack>
    </Layout>
  );
};

export default Page;
