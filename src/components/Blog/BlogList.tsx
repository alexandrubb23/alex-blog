import { Box, Heading } from "@chakra-ui/react";

import { useIsHomePage } from "@/hooks";
import { useBlogFilter } from "@/hooks/content/useBlogFilter";
import { EntityList } from "../Entities";
import { TechnologySelector } from "../TechnologySelector";
import { CenteredSpinner, ErrorAlert } from "../common";
import { DoubleSeparator } from "../common/DoubleSeparator";

const BlogList = () => {
  const isHomePage = useIsHomePage();
  const { posts, data, selectedId, isLoading, error, handleSelected } =
    useBlogFilter();

  if (isLoading) return <CenteredSpinner />;

  if (error) {
    return <ErrorAlert error={`Failed to load posts: ${error.message}`} />;
  }

  if (!data || data.length === 0) {
    return <ErrorAlert error="No posts found." />;
  }

  return (
    <>
      <Box
        alignItems={{ base: "flex-start", md: "center" }}
        display="flex"
        flexDirection={{ base: "column", md: "row", sm: "row", smDown: "row" }}
        gap={{ base: 4, md: 0 }}
        justifyContent="space-between"
        mb={{ base: 4, md: 0 }}
      >
        <Heading
          as={isHomePage ? "h2" : "h1"}
          fontSize={{ base: "20px", sm: "22px", md: "24px", lg: "26px" }}
          fontWeight={500}
          mb={{ base: 0, md: 0 }}
        >
          From the Blog
        </Heading>
        <Box minW={{ md: "200px" }}>
          <TechnologySelector
            addItems={["All"]}
            data={data}
            onSelect={handleSelected}
            selectedId={selectedId}
          />
        </Box>
      </Box>
      <DoubleSeparator mt={{ base: 4, sm: 5 }} />
      <EntityList data={posts || []} />
    </>
  );
};

export default BlogList;
