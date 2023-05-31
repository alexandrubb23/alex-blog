'use client';

import { ENTITIES } from '@/app/api/lib/constants';
import { PageLayout } from '@/components/common';
import { PageProps } from '@/models';

const Page = ({ params }: PageProps) => (
  <PageLayout value={{ entity: ENTITIES.PAGES, params }} />
);

export default Page;
