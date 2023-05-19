'use client';

import { Grid, GridItem } from '@chakra-ui/react';

import { Author, Blog, NavBar } from '@/components';
import './global.css';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout home>
      <Blog />
    </Layout>
  );
}
