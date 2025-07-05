import { Box, Heading, List } from "@chakra-ui/react";

import { ENTITIES } from "@/app/api/lib/constants";
import { useEntityQuery, useIsHomePage } from "@/hooks";
import { Separator } from "../Separator";
import { EntityList } from "../Entities";
import { DIVIDER_MARGIN } from "../Entities/EntityTechnologiesList/EntityTechnologiesList";
import { CenteredSpinner, ErrorAlert } from "../common";

const Blog = () => {
  const isHomePage = useIsHomePage();

  const { data: posts, isLoading, error } = useEntityQuery(ENTITIES.POSTS);

  if (isLoading) return <CenteredSpinner />;

  if (error) return <ErrorAlert error={error.message} />;

  if (!posts || posts.length === 0)
    return <ErrorAlert error="No posts found." />;

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Heading as={isHomePage ? "h2" : "h1"} fontSize="28px" fontWeight={500}>
          From the Blog
        </Heading>
        <List.Root
          display="flex"
          flexDirection="row"
          gap="28px"
          listStyleType="none"
        >
          <List.Item>
            All
            <Separator size="md" borderColor="black" />
          </List.Item>
          <List.Item>TypeScript</List.Item>
          <List.Item>React</List.Item>
          <List.Item>JavaScript</List.Item>
        </List.Root>
      </Box>
      <Separator mt="24px" />
      <Separator mt={DIVIDER_MARGIN} />
      <EntityList posts={posts} />
      <Separator />
    </>
  );
};

export default Blog;
