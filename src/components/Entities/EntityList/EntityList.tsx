import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import { UseQueryResult } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

import { APIResponse, Entity, PostData } from '@/app/api/lib/models';
import { CenteredSpinner, ErrorAlert, IconLabel } from '@/components/common';
import { EntityItem } from '@/components/Entities/EntityItem';
import { useIconStyle, useIsNotMobile } from '@/hooks';
import icons from '@/data/icons';

interface EntityListProps {
  entityType: Entity;
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
              {technology.data.map((entityItem: PostData) => (
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
