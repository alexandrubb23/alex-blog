import { Box, Grid, GridItem } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";
import "@/app/global.css";
import Providers from "@/app/providers";
import { Author, NavBar } from "@/components";

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
          base: `"nav" "main" "content"`,
        }}
      >
        <Box bg="header" w="100%">
          <Box maxW="container" margin="auto" padding="5">
            <GridItem area="nav">
              <NavBar />
            </GridItem>
            <GridItem area="main">
              <Author name={AUTHOR.NAME} />
            </GridItem>
          </Box>
        </Box>

        <GridItem
          area="content"
          className={contentClassName}
          maxW="{sizes.container}"
          margin="auto"
          padding="{spacing.space}"
        >
          {children}
        </GridItem>
      </Grid>
    </Providers>
  );
};

export default Layout;
