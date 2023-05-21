'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiDocker, SiJavascript, SiRedux } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';

import { Layout } from '@/components/Layout';
import {
  CenteredSpinner,
  Date,
  ErrorAlert,
  IconLabel,
} from '@/components/common';
import { useCertifications } from '@/hooks';
import React from 'react';

const icons = {
  docker: SiDocker,
  git: BsGithub,
  react: GrReactjs,
  javascript: SiJavascript,
  redux: SiRedux,
};

const Certifications = () => {
  const { data: technologies, isLoading, error } = useCertifications();

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading) return <CenteredSpinner />;

  return (
    <Layout>
      <VStack align='left' spacing={4}>
        <Heading as='h1'>Certifications</Heading>
        <Text>
          I hold certifications in Docker, Git, React, Node.js, Python,
          JavaScript, and Java.
        </Text>
        {technologies?.map(technology => (
          <React.Fragment key={technology.name}>
            <Heading as='h2' fontSize='22px'>
              <IconLabel icon={icons[technology.id]} label={technology.name} />
            </Heading>

            <VStack align='left' spacing={4}>
              {technology.data.map(certification => (
                <Box key={certification.title}>
                  <Link
                    href={`certifications/${technology.id}/${certification.id}`}
                    passHref
                  >
                    {certification.title}
                  </Link>
                  <Box textColor='grey'>
                    Completion date:{' '}
                    <Date dateString={certification.completionDate} />
                  </Box>
                </Box>
              ))}
            </VStack>
          </React.Fragment>
        ))}
      </VStack>
    </Layout>
  );
};

export default Certifications;
