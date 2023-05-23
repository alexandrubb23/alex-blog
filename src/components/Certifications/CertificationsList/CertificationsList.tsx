import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsGithub, BsFiletypeJava } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';
import { GrMysql, GrReactjs } from 'react-icons/gr';
import {
  SiDocker,
  SiJavascript,
  SiNestjs,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

import { CertificationItem } from '@/components/Certifications/CertificationItem';
import { IconLabel } from '@/components/common';
import { useIsNotMobile } from '@/hooks';
import { Certificate, Certification } from '@/services/certifications-service';

const icons = {
  docker: SiDocker,
  git: BsGithub,
  html: AiFillHtml5,
  javascript: SiJavascript,
  mysql: GrMysql,
  nestjs: SiNestjs,
  nodejs: FaNodeJs,
  react: GrReactjs,
  redux: SiRedux,
  typescript: SiTypescript,
  java: BsFiletypeJava,
};

interface CertificationsListProps {
  technologies: Certification[];
}

const CertificationsList = ({ technologies }: CertificationsListProps) => {
  const isNotMobile = useIsNotMobile();

  return (
    <>
      {technologies?.map(technology => (
        <React.Fragment key={technology.name}>
          <Box mt={8}>
            <Heading as='h2' fontSize='22px' mb={4}>
              <IconLabel
                icon={icons[technology.id]}
                iconWrapperProps={{
                  bg: 'midNightBlue.500',
                  borderRadius: 'full',
                  color: 'dodgerblue',
                  padding: '10px',
                }}
                label={technology.name}
                showIcon={isNotMobile}
              />
            </Heading>

            <VStack
              align='left'
              spacing={2}
              pl={isNotMobile ? '3rem' : undefined}
            >
              {technology.data.map((certificate: Certificate) => (
                <CertificationItem
                  certificate={certificate}
                  key={certificate.id}
                  technologyId={technology.id}
                />
              ))}
            </VStack>
          </Box>
          <Divider my={8} />
        </React.Fragment>
      ))}
    </>
  );
};

export default CertificationsList;
