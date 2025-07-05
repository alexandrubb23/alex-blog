import { Grid, GridItem } from "@chakra-ui/react";

import "@/app/global.css";

import Providers from "@/app/providers";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Layout = ({ contentClassName, children }: LayoutProps) => (
  <Providers>
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
      }}
    >
      <Header />
      <GridItem
        area="main"
        className={contentClassName}
        maxWidth={{
          base: "100%",
          sm: "100%",
          md: "container.md",
          lg: "container.lg",
        }}
        margin="64px auto 64px auto"
        padding="5"
      >
        {children}
      </GridItem>
      <Footer />
    </Grid>
  </Providers>
);

export default Layout;
