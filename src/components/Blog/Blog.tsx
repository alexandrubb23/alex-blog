import { useMemo, useState } from "react";

import { ENTITIES } from "@/app/api/lib/constants";
import { useEntityQuery, useIsHomePage } from "@/hooks";
import { EntityList } from "../Entities";
import { DIVIDER_MARGIN } from "../Entities/EntityTechnologiesList/EntityTechnologiesList";
import { Separator } from "../Separator";
import { CenteredSpinner, ErrorAlert } from "../common";
import BlogHeader from "./BlogHeader";

const Blog = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const isHomePage = useIsHomePage();
  const { data, isLoading } = useEntityQuery(ENTITIES.POSTS);

  const posts = useMemo(() => {
    if (!selectedId || selectedId === "All") return data;
    return data?.filter((post) => post.id === selectedId);
  }, [selectedId, data]);

  if (isLoading) return <CenteredSpinner />;

  if (!posts || posts.length === 0 || !data || data.length === 0)
    return <ErrorAlert error="No posts found." />;

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };

  return (
    <>
      <BlogHeader
        data={data}
        isHomePage={isHomePage}
        onSelect={handleSelected}
        selectedId={selectedId}
      />
      <Separator mt="24px" />
      <Separator mt={DIVIDER_MARGIN} />
      <EntityList data={posts} />
      <Separator />
    </>
  );
};

export default Blog;
