import { Grid, GridItem } from '@chakra-ui/react';

import '@/app/global.css';
import { Author, NavBar } from '@/components';
import Providers from '@/app/providers';

interface LayoutProps {
  children: React.ReactNode;
  contentClassName?: string;
  home?: boolean;
}

const Layout = ({ contentClassName, children, home }: LayoutProps) => {
  return (
    <Providers>
      <Grid
        padding={5}
        rowGap={8}
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

        <GridItem area='content' className={contentClassName}>
          {children}
        </GridItem>
      </Grid>
    </Providers>
  );
};

export default Layout;
