'use client';

import { Heading, Text } from '@chakra-ui/react';

import { EntityList } from '@/components/Entities';
import { Layout } from '@/components/Layout';

const Exercises = () => {
  return (
    <Layout>
      <Heading as='h1'>Exercises</Heading>
      <Text mt={4}>Exercises</Text>
      <EntityList entity='exercises' />
    </Layout>
  );
};

export default Exercises;
