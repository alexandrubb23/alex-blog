import { Box, Heading, List } from "@chakra-ui/react";

import { ListPosts } from "@/components/ListPosts";
import { useIconStyle, useIsHomePage } from "@/hooks";
import { Divider } from "../Divider";

const Blog = () => {
  const isHomePage = useIsHomePage();

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
          <List.Item textDecoration="underline">All</List.Item>
          <List.Item>TypeScript</List.Item>
          <List.Item>React</List.Item>
          <List.Item>JavaScript</List.Item>
        </List.Root>
      </Box>
      <Divider mt="24px" />
      <Divider mt="6px" />
      <ListPosts />
    </>
  );
};

export default Blog;
