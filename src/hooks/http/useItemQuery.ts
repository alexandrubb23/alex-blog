import { usePathname } from "next/navigation";

import { Entity, PostData } from "@/app/api/lib/models";
import { UseQueryResult } from "@tanstack/react-query";
import useEntityItemQuery from "./useEntityItemQuery";

const useItemQuery = (): UseQueryResult<PostData, Error> => {
  const pathname = usePathname();
  const chunks = pathname.split("/");

  const entity: Entity = chunks[1] as Entity;
  const [slug] = chunks.slice(2);

  return useEntityItemQuery({
    entity,
    slug,
  });
};

export default useItemQuery;
