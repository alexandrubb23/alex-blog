import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFiletypeJava, BsGithub } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa';
import { GrMysql, GrReactjs } from 'react-icons/gr';
import {
  SiDocker,
  SiJavascript,
  SiNestjs,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Link from 'next/link';

import { EntityItem } from '@/components/Entities/EntityItem';
import { CenteredSpinner, ErrorAlert, IconLabel } from '@/components/common';
import {
  useCertifications,
  useColorMode,
  useIconStyle,
  useIsNotMobile,
} from '@/hooks';
import { Certificate } from '@/services/certifications-service';
import { APIResponse } from '@/app/api/lib/models';
import { QueryParams } from '@/hooks/router/useEntitySlug';
import { UseQueryResult } from '@tanstack/react-query';
import { FetchResponse } from '@/services';

const icons = {
  Docker: SiDocker,
  Git: BsGithub,
  HTML: AiFillHtml5,
  Java: BsFiletypeJava,
  JavaScript: SiJavascript,
  MySQL: GrMysql,
  NestJS: SiNestjs,
  NextJS: TbBrandNextjs,
  NodeJS: FaNodeJs,
  React: GrReactjs,
  Redux: SiRedux,
  TypeScript: SiTypescript,
};

interface EntityListProps {
  entityType: 'posts' | 'certifications';
  queryHook: () => UseQueryResult<APIResponse[], Error>;
}

const EntityList = ({ entityType, queryHook }: EntityListProps) => {
  const iconStyle = useIconStyle();
  const isNotMobile = useIsNotMobile();

  const { data: technologies, isLoading, error } = queryHook();

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading) return <CenteredSpinner />;

  return (
    <>
      {technologies?.map(technology => (
        <React.Fragment key={technology.name}>
          <Box mt={8}>
            <Heading as='h2' fontSize='22px' mb={4}>
              <IconLabel
                icon={icons[technology.id]}
                iconWrapperProps={iconStyle}
                label={technology.name}
                showIcon={isNotMobile}
              />
            </Heading>

            <VStack
              align='left'
              spacing={2}
              pl={isNotMobile ? '3rem' : undefined}
            >
              {technology.data.map((entityItem: FetchResponse) => (
                <EntityItem
                  entityItem={entityItem}
                  entityType={entityType}
                  key={entityItem.id}
                  technologyId={technology.id}
                />
              ))}
            </VStack>
          </Box>
          <Divider my={8} />
        </React.Fragment>
      ))}
      <Box marginY={2}>
        <Link href='/'>← Back to home</Link>
      </Box>
    </>
  );
};

export default EntityList;
