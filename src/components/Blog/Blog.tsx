import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

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

  const posts =
    !selectedId || selectedId === ("All" satisfies Technology)
      ? data
      : data?.filter((post) => post.id === selectedId);

  const handleSelected = (id: string) => {
    setSelectedId(id);
  };

  if (isLoading) return <CenteredSpinner />;

  if (!posts || posts.length === 0 || !data || data.length === 0)
    return <ErrorAlert error="No posts found." />;

  return (
    <>
      <Flex direction="row" justify="space-between" align="flex-end" gap={4}>
        <Box flex="1" minW={0}>
          <Box
            fontFamily="mono"
            fontSize="11px"
            fontWeight="500"
            letterSpacing="0.32em"
            textTransform="uppercase"
            color="iris"
            mb={3}
          >
            ── ./logs · stream 01
          </Box>
          <Heading
            as={isHomePage ? "h2" : "h1"}
            fontFamily="display"
            fontSize={{ base: "32px", sm: "36px", md: "46px", lg: "54px" }}
            fontWeight="700"
            letterSpacing="-0.025em"
            lineHeight="1.05"
            color="bone"
            textTransform="uppercase"
            m={0}
          >
            From the{" "}
            <Box
              as="span"
              color="iris"
              textShadow={{
                base: "none",
                _dark:
                  "0 0 24px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)",
              }}
            >
              Blog
            </Box>
          </Heading>
        </Box>
        <TechnologySelector
          addItems={["All"]}
          data={data}
          onSelect={handleSelected}
          selectedId={selectedId}
        />
      </Flex>
      <DoubleSeparator mt={{ base: 6, md: 8 }} mb={{ base: 6, md: 10 }} />
      <EntityList data={posts} />
    </>
  );
};

const Blog = () => {
  return (
    <Container>
      <Box
        margin={{
          base: "32px auto",
          md: "96px auto",
        }}
      >
        <MyList />
        <DoubleSeparator />
      </Box>
    </Container>
  );
};

export default Blog;
