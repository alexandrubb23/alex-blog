'use client';

import { CenteredSpinner, ErrorAlert, PageLayout } from '@/components/common';
import { usePage } from '@/hooks';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const page = usePage(params.id);

  return <PageLayout result={page} />;
};

export default Page;
