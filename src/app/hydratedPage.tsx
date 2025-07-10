import { dehydrate } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

import prefetchEntity from "@/utils/prefetchEntity";
import type { Entity } from "./api/lib/models";
import EntityHydrationProvider from "./posts/[id]/EntityHydrationProvider";

export type EntityProps = {
  params: Promise<{ id: string }>;
};

export type HydratedPageProps = EntityProps & {
  entity: Entity;
  component: React.ComponentType<any>;
};

const hydratedPage = async ({
  component: Component,
  entity,
  params,
}: PropsWithChildren<HydratedPageProps>) => {
  const { id } = await params;
  const prefetched = await prefetchEntity({ id, entity });

  return (
    <EntityHydrationProvider dehydratedState={dehydrate(prefetched)}>
      <Component />
    </EntityHydrationProvider>
  );
};

export default hydratedPage;
