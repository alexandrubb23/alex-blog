import { Grid, GridItem } from "@chakra-ui/react";

import "@/app/global.css";

import Providers from "@/app/providers";
import { Toaster } from "../ui/toaster";
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
      color={{
        base: "gray.800",
        _dark: "gray.400",
      }}
    >
      <Header />
      <GridItem
        area="main"
        className={contentClassName}
        minHeight="calc(100vh - 128px)"
      >
        {children}
        <Toaster />
      </GridItem>
      <Footer />
    </Grid>
  </Providers>
);

export default Layout;
