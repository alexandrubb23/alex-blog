import React from 'react';
import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';
import { GrMysql, GrReactjs } from 'react-icons/gr';
import { SiDocker, SiJavascript, SiRedux, SiTypescript } from 'react-icons/si';

import { IconLabel } from '@/components/common';
import { Certification } from '@/hooks/useCertifications';
import { CertificationItem } from '@/components/Certifications/CertificationItem';

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

interface CertificationsListProps {
  technologies: Certification[];
}

const CertificationsList = ({ technologies }: CertificationsListProps) => {
  return (
    <>
      {technologies?.map(technology => (
        <React.Fragment key={technology.name}>
          <Box mt={8}>
            <Heading as='h2' fontSize='22px' mb={4}>
              <IconLabel
                icon={icons[technology.id]}
                iconWrapperProps={{ color: 'dodgerblue' }}
                label={technology.name}
              />
            </Heading>

            <VStack align='left' spacing={2}>
              {technology.data.map(certification => (
                <CertificationItem
                  certification={certification}
                  key={certification.id}
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
