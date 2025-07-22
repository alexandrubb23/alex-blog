import { useMemo, useState } from "react";

import { ENTITIES } from "@/app/api/lib/constants";
import { useEntityQuery, useIsHomePage } from "@/hooks";
import { Box } from "@chakra-ui/react";
import { EntityList } from "../Entities";
import Container from "../Layout/Container";
import { CenteredSpinner, ErrorAlert } from "../common";
import { DoubleSeparator } from "../common/DoubleSeparator";
import BlogHeader from "./BlogHeader";

const Blog = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const isHomePage = useIsHomePage();
  const { data, isLoading } = useEntityQuery({ entity: ENTITIES.POSTS });

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
    <Container>
      <Box
        margin={{
          base: 0,
          md: "64px auto 64px auto",
        }}
      >
        <BlogHeader
          data={data}
          isHomePage={isHomePage}
          onSelect={handleSelected}
          selectedId={selectedId}
        />
        <DoubleSeparator
          mt={{
            sm: 5,
            smDown: 5,
          }}
        />
        <EntityList data={posts} />
        <DoubleSeparator />
      </Box>
    </Container>
  );
};

export default Blog;
