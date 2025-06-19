'use client';

import Providers from '@/app/providers';
import { PageLayout } from '@/components/common';
import { HydrationBoundary } from '@tanstack/react-query';

type Props = {
  dehydratedState: unknown;
};

export default function EntityHydrationProvider({ dehydratedState }: Props) {
  return (
    <Providers>
      <HydrationBoundary state={dehydratedState}>
        <PageLayout />
      </HydrationBoundary>
    </Providers>
  );
}
