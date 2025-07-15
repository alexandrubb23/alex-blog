import { GridItem, Container, Box, LinkBox, Button } from "@chakra-ui/react";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

import { AUTHOR } from "@/app/constants";
import { NavBar, Author } from "..";

const Header = () => (
  <GridItem area="header" bg="header">
    <Container
      margin="auto"
      padding="1.25rem 1.25rem 3.375rem 1.25rem"
      maxWidth={{
        base: "100%",
        sm: "100%",
        md: "container.md",
        lg: "container.lg",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flex="0 0 100px">
          <LinkBox
            fontFamily="libre"
            fontSize="28px"
            fontWeight="700"
            display="flex"
            flex="0 0 140px"
          >
            <Link href="/">AB</Link>
          </LinkBox>
        </Box>
        <Box display="flex" flex="1 1 1">
          <NavBar />
        </Box>
        <Box display="flex" flex="0 0 100px">
          <Button
            variant="outline"
            border="2px solid"
            borderColor="black"
            borderRadius="2rem"
          >
            <RiDownload2Fill />
            My Resume
          </Button>
        </Box>
      </Box>
      <Author name={AUTHOR.NAME} />
    </Container>
  </GridItem>
);

export default Header;
