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
      I have earned certifications in a wide range of software technologies, including Docker, Git, React, Node.js, Python, JavaScript, TypeScript, MySQL, and Java. These certifications validate my expertise and proficiency in these areas, demonstrating my commitment to professional growth and staying up-to-date with industry standards. I am equipped with the knowledge and skills to excel in software development and contribute effectively to projects using these technologies.
      </Text>
      <CertificationsList technologies={technologies} />
      <Box marginY={2}>
        <Link href='/'>← Back to home</Link>
      </Box>
    </Layout>
  );
};

export default Certifications;
