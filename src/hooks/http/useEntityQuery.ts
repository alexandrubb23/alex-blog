import { useQuery } from "@tanstack/react-query";

import { APIResponse } from "@/app/api/lib/models";
import type { GetAllPosts } from "@/app/api/lib/sql/getAllPosts";
import { factoryApiClient } from "@/services";
import { getStaleTime } from "@/utils/api";

const useEntityQuery = ({ entity, queryFilter }: GetAllPosts) => {
  const httpService = factoryApiClient<APIResponse[]>(entity);

  return useQuery<APIResponse[], Error>({
    queryKey: [entity, queryFilter],
    queryFn: () => httpService.getAll(queryFilter),
    staleTime: getStaleTime(),
  });
};

export default useEntityQuery;
