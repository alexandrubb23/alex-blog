'use client';

import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiDocker, SiJavascript, SiRedux, SiTypescript } from 'react-icons/si';
import { GrReactjs, GrMysql } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';

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
  html: AiFillHtml5,
  mysql: GrMysql,
  typescript: SiTypescript,
  nodejs: FaNodeJs,
};

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
      {technologies?.map(technology => (
        <React.Fragment key={technology.name}>
          <Box mt={8}>
            <Heading as='h2' fontSize='22px' mb={4}>
              <IconLabel 
                icon={icons[technology.id]} 
                iconWrapperProps={{ color: 'dodgerblue'}} 
                label={technology.name} 
              />
            </Heading>

            <VStack align='left' spacing={2}>
              {technology.data.map(certification => (
                <Box key={certification.title}>
                  <Link
                    href={`certifications/${technology.id}/${certification.id}`}
                    passHref
                  >
                    {certification.title}
                  </Link>
                  <Box textColor='grey'>
                    <Date dateString={certification.completionDate} />
                  </Box>
                </Box>
              ))}
            </VStack>
          </Box>
          <Divider my={8} />
        </React.Fragment>
      ))}
      <Box marginY={2}>
        <Link href='/'>← Back to home</Link>
      </Box>
    </Layout>
  );
};

export default Certifications;
