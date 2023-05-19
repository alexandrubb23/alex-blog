import { Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';

import { Author, Blog, NavBar } from '@/components';
import '@/app/global.css';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <Grid
      alignContent='center'
      justifyContent='center'
      padding={5}
      rowGap={5}
      templateAreas={{
        base: `"nav" "main" "blog"`,
      }}
      templateColumns={{
        base: '0.5fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {home && (
        <GridItem textAlign='center' area='main'>
          <Author name='Alexandru Barbulescu' />
        </GridItem>
      )}
      <GridItem area='blog'>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
