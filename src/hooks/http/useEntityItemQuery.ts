import { useQuery } from "@tanstack/react-query";
import { singular } from "pluralize";

import { Entity, PostData, QueryParams } from "@/app/api/lib/models";
import { factoryApiClient } from "@/services";
import { getStaleTime } from "@/utils/api";
import { usePostHref } from "../router";

interface EntityItemQuery {
  entity: Entity;
  slug: QueryParams["id"];
}

const useEntityItemQuery = ({ entity, slug }: EntityItemQuery) => {
  const httpService = factoryApiClient<PostData>(entity);

  const path = usePostHref({
    postType: "",
    id: slug,
  });

  return useQuery<PostData, Error>({
    queryKey: [singular(entity), slug],
    queryFn: () => httpService.findOne(path),
    staleTime: getStaleTime(),
  });
};

export default useEntityItemQuery;
