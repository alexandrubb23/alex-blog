'use client';

import { Heading, Text } from '@chakra-ui/react';

import { ENTITIES } from '@/app/api/lib/constants';
import { EntityList } from '@/components/Entities';
import { Layout } from '@/components/Layout';

const Exercises = () => {
  return (
    <Layout>
      <Heading as='h1'>Exercises</Heading>
      <Text mt={4}>Exercises</Text>
      <EntityList entity={ENTITIES.EXERCISES} />
    </Layout>
  );
};

export default Exercises;
