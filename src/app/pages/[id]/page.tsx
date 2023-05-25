'use client';

import { PageLayout } from '@/components/common';
import { usePage } from '@/hooks';
import { PageProps } from '@/models';

const Page = ({ params }: PageProps) => (
  <PageLayout query={{ queryHook: usePage, params }} />
);

export default Page;
