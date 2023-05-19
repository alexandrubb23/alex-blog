'use client';

import { Box, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import {
  CenteredSpinner,
  ErrorAlert,
  Date,
  PageLayout,
} from '@/components/common';
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

  return <PageLayout data={page} />;
};

export default Page;
