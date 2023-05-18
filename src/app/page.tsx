'use client';

import { Grid, GridItem } from '@chakra-ui/react';

import Providers from './providers';
import { Author, Blog } from '@/components';

export default function Home() {
  return (
    <Providers>
      <Grid
        alignContent='center'
        justifyContent='center'
        padding={5}
        rowGap={5}
      >
        <GridItem textAlign='center'>
          <Author name='Alexandru Barbulescu' />
        </GridItem>
        <GridItem>
          <Blog />
        </GridItem>
      </Grid>
    </Providers>
  );
}
