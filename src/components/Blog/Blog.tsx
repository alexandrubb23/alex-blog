import { Box } from "@chakra-ui/react";

import Container from "../Layout/Container";
import { DoubleSeparator } from "../common/DoubleSeparator";
import BlogList from "./BlogList";

const Blog = () => (
  <Container>
    <Box margin={{ base: 0, md: "64px auto 64px auto" }}>
      <BlogList />
      <DoubleSeparator />
    </Box>
  </Container>
);

export default Blog;
