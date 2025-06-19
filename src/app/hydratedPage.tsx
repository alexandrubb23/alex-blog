import { dehydrate } from '@tanstack/react-query';

import prefetchEntity from '@/utils/prefetchEntity';
import type { Entity } from './api/lib/models';
import EntityHydrationProvider from './posts/[id]/EntityHydrationProvider';

export type EntityProps = {
  params: Promise<{ id: string }>;
};

export type HydratedPageProps = EntityProps & {
  entity: Entity;
};

const hydratedPage = async ({ params, entity }: HydratedPageProps) => {
  const { id } = await params;
  const prefetched = await prefetchEntity({ id, entity });

  return <EntityHydrationProvider dehydratedState={dehydrate(prefetched)} />;
};

export default hydratedPage;
