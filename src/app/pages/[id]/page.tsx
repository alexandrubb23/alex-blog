'use client';

import { PageLayout } from '@/components/common';
import { usePage } from '@/hooks';
import { QueryParams } from '@/hooks/useEntitySlug';

interface PageProps {
  params: QueryParams;
}

const Page = ({ params }: PageProps) => (
  <PageLayout query={{ queryHook: usePage, params }} />
);

export default Page;
