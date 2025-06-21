import { Grid, GridItem } from '@chakra-ui/react';

import { AUTHOR } from '@/app/constants';
import '@/app/global.css';
import Providers from '@/app/providers';
import { Author, NavBar } from '@/components';

interface LayoutProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Layout = ({ contentClassName, children }: LayoutProps) => {
  return (
    <Providers>
      <Grid
        padding={5}
        rowGap={8}
        templateAreas={{
          base: `"nav" "main" "content"`,
        }}
        maxW='1024px'
        margin='auto'
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>

        <GridItem area='main'>
          <Author name={AUTHOR.NAME} />
        </GridItem>

        <GridItem area='content' className={contentClassName}>
          {children}
        </GridItem>
      </Grid>
    </Providers>
  );
};

export default Layout;
