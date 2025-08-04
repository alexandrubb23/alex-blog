"use client";

import { Heading, Text } from "@chakra-ui/react";

import { ENTITIES } from "@/app/api/lib/constants";
import { EntityList } from "@/components/Entities";
import { Layout } from "@/components/Layout";
import { useEntityQuery } from "@/hooks";
import { CenteredSpinner, ErrorAlert } from "@/components/common";
import Container from "@/components/Layout/Container";

const ExercisesList = () => {
  const { data: exercises, isLoading } = useEntityQuery({
    entity: ENTITIES.EXERCISES,
  });

  if (isLoading) return <CenteredSpinner />;

  if (!exercises || exercises.length === 0)
    return <ErrorAlert error="No exercises found." />;

  return <EntityList data={exercises} />;
};

const Exercises = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Exercises</Heading>
        <Text mt={4}>Exercises</Text>
        <ExercisesList />
      </Container>
    </Layout>
  );
};

export default Exercises;
