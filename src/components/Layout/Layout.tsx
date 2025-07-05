import Link from "next/link";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { RiDownload2Fill } from "react-icons/ri";

import "@/app/global.css";

import { AUTHOR } from "@/app/constants";
import { Author, NavBar } from "@/components";
import Providers from "@/app/providers";

interface LayoutProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Layout = ({ contentClassName, children }: LayoutProps) => {
  return (
    <Providers>
      <Grid
        rowGap={8}
        templateAreas={{
          base: `"logo" "nav" "main" "content"`,
        }}
      >
        <Box bg="header" w="100%">
          <Box maxW="container" margin="auto" padding="5">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <GridItem
                area="logo"
                fontFamily="libre"
                fontSize="2xl"
                title={AUTHOR.NAME}
              >
                <Link href="/">AB</Link>
              </GridItem>
              <GridItem area="nav">
                <NavBar />
              </GridItem>
              <GridItem area="nav">
                <Button
                  variant="outline"
                  border={"2px solid"}
                  borderColor="black"
                  borderRadius="2rem"
                >
                  <RiDownload2Fill />
                  My Resume
                </Button>
              </GridItem>
            </Box>
            <GridItem area="main" mt="56px">
              <Author name={AUTHOR.NAME} />
            </GridItem>
          </Box>
        </Box>

        <GridItem
          area="content"
          className={contentClassName}
          w="{sizes.container}"
          margin="auto"
        >
          {children}
        </GridItem>
      </Grid>
    </Providers>
  );
};

export default Layout;
