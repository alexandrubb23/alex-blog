import { useQueryClient } from "@tanstack/react-query";
import { singular } from "pluralize";
import { useCallback } from "react";

import { Entity } from "@/app/api/lib/models";
import { factoryApiClient } from "@/services";
import { getStaleTime } from "@/utils/api";

const usePrefetchPost = () => {
  const queryClient = useQueryClient();

  const prefetchPost = useCallback(
    async (entity: Entity, slug: string) => {
      const httpService = factoryApiClient(entity);
      const queryKey = [singular(entity), slug];

      await queryClient.prefetchQuery({
        queryKey,
        queryFn: () => httpService.findOne(slug),
        staleTime: getStaleTime(),
      });
    },
    [queryClient]
  );

  return prefetchPost;
};

export default usePrefetchPost;

