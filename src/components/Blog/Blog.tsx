import { Box, Heading } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { ENTITIES } from "@/app/api/lib/constants";
import { type Technology } from "@/app/api/lib/models";
import { useEntityQuery, useIsHomePage } from "@/hooks";
import { EntityList } from "../Entities";
import Container from "../Layout/Container";
import { TechnologySelector } from "../TechnologySelector";
import { CenteredSpinner, ErrorAlert } from "../common";
import { DoubleSeparator } from "../common/DoubleSeparator";

const MyList = () => {
  const isHomePage = useIsHomePage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading } = useEntityQuery({ entity: ENTITIES.POSTS });

  const posts = useMemo(() => {
    if (!selectedId || selectedId === ("All" satisfies Technology)) return data;
    return data?.filter((post) => post.id === selectedId);
  }, [selectedId, data]);

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };

  if (isLoading) return <CenteredSpinner />;

  if (!posts || posts.length === 0 || !data || data.length === 0)
    return <ErrorAlert error="No posts found." />;

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Heading
          as={isHomePage ? "h2" : "h1"}
          fontSize={{ base: "22px", sm: "22px", md: "24px", lg: "26px" }}
          fontWeight={500}
        >
          From the Blog
        </Heading>
        <TechnologySelector
          addItems={["All"]}
          data={data}
          onSelect={handleSelected}
          selectedId={selectedId}
        />
      </Box>
      <DoubleSeparator mt={{ sm: 5, smDown: 5 }} />
      <EntityList data={posts} />
    </>
  );
};

const Blog = () => {
  return (
    <Container>
      <Box
        margin={{
          base: 0,
          md: "64px auto 64px auto",
        }}
      >
        <MyList />
        <DoubleSeparator />
      </Box>
    </Container>
  );
};

export default Blog;
