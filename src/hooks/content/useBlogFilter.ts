import { useMemo, useState } from "react";

import { ENTITIES } from "@/app/api/lib/constants";
import { type Technology } from "@/app/api/lib/models";
import { useEntityQuery } from "@/hooks";

export const useBlogFilter = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading, error } = useEntityQuery({ entity: ENTITIES.POSTS });

  const posts = useMemo(() => {
    if (!data) return undefined;
    if (!selectedId || selectedId === ("All" satisfies Technology)) return data;
    return data.filter((post) => post.id === selectedId);
  }, [selectedId, data]);

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };

  return {
    posts,
    data,
    selectedId,
    isLoading,
    error,
    handleSelected,
  };
};
