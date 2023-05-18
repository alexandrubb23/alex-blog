'use client';

import { Grid, GridItem } from '@chakra-ui/react';

import Providers from './providers';
import { Author, Blog, NavBar } from '@/components';
import './global.css';

export default function Home() {
  return (
    <Providers>
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
        <GridItem textAlign='center' area='main'>
          <Author name='Alexandru Barbulescu' />
        </GridItem>
        <GridItem area='blog'>
          <Blog />
        </GridItem>
      </Grid>
    </Providers>
  );
}
