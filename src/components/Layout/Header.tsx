import { Box, Container, GridItem, LinkBox } from "@chakra-ui/react";
import Link from "next/link";

import { AUTHOR } from "@/app/constants";
import { Author, NavBar } from "..";
import ResumeButton from "../NavBar/ResumeButton";

const Header = () => (
  <GridItem
    area="header"
    bg={{
      base: "header",
      _dark: "#111111",
    }}
  >
    <Container
      margin="auto"
      padding="1.25rem"
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
            color={{
              _dark: "white",
            }}
          >
            <Link href="/">AB</Link>
          </LinkBox>
        </Box>
        <Box display="flex" flex="1 1 1">
          <NavBar />
        </Box>
        <ResumeButton />
      </Box>
      <Author name={AUTHOR.NAME} />
    </Container>
  </GridItem>
);

export default Header;
