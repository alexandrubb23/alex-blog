import { GridItem, Container, Box, LinkBox, Button } from "@chakra-ui/react";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

import { AUTHOR } from "@/app/constants";
import { NavBar, Author } from "..";

const Header = () => (
  <GridItem area="header" bg="header" pb="54px">
    <Container
      margin="auto"
      padding="5"
      maxWidth={{
        base: "100%",
        sm: "100%",
        md: "container.md",
        lg: "container.lg",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <LinkBox fontFamily="libre" fontSize="28px" fontWeight="700">
          <Link href="/">AB</Link>
        </LinkBox>
        <NavBar />
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
      <Author name={AUTHOR.NAME} />
    </Container>
  </GridItem>
);

export default Header;
