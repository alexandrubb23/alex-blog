'use client';

import { CenteredSpinner, ErrorAlert, PageLayout } from '@/components/common';
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
