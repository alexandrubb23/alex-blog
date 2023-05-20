import { Grid, GridItem } from '@chakra-ui/react';

import '@/app/global.css';
import { Author, NavBar } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <Grid
      padding={5}
      rowGap={5}
      templateAreas={{
        base: `"nav" "main" "content"`,
      }}
      maxW='800px'
      margin='auto'
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>

      <GridItem area='main'>
        <Author name='Alexandru Barbulescu' isHome={home} />
      </GridItem>

      <GridItem area='content'>{children}</GridItem>
    </Grid>
  );
};

export default Layout;
