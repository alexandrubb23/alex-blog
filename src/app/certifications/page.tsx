'use client';

import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { CertificationsList } from '@/components/Certifications';
import { Layout } from '@/components/Layout';
import { CenteredSpinner, ErrorAlert } from '@/components/common';
import { useCertifications } from '@/hooks';

const Certifications = () => {
  const { data: technologies, isLoading, error } = useCertifications();

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading) return <CenteredSpinner />;

  return (
    <Layout>
      <Heading as='h1'>Certifications</Heading>
      <Text mt={4}>
        I hold certifications in Docker, Git, React, Node.js, Python,
        JavaScript, TypeScript, MySQL, and Java.
      </Text>
      <CertificationsList technologies={technologies} />
      <Box marginY={2}>
        <Link href='/'>← Back to home</Link>
      </Box>
    </Layout>
  );
};

export default Certifications;
