import { useMemo } from "react";

import type { APIResponse, Technology } from "@/app/api/lib/models";

const useTechnologies = (
  data: APIResponse[] = [],
  addItems: Technology[] = [],
) => {
  return useMemo(() => {
    const ids = data.map((item) => item.id);
    return Array.from(new Set([...addItems, ...ids]));
  }, [data, addItems]);
};

export default useTechnologies;
