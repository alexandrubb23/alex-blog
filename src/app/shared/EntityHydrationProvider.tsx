"use client";

import type { PropsWithChildren } from "react";
import { HydrationBoundary } from "@tanstack/react-query";

import Providers from "@/app/providers";
import { PageLayout } from "@/components/common";

type Props = {
  dehydratedState: unknown;
};

const EntityHydrationProvider = ({
  children,
  dehydratedState,
}: PropsWithChildren<Props>) => {
  return (
    <Providers>
      <HydrationBoundary state={dehydratedState}>
        <PageLayout>{children}</PageLayout>
      </HydrationBoundary>
    </Providers>
  );
};

export default EntityHydrationProvider;
