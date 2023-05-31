import React from 'react';
import { Box, Divider } from '@chakra-ui/react';

import { APIResponse } from '@/app/api/lib/models';
import { EntityTechnologyItemsList } from '@/components/Entities/EntityTechnologyItemsList';
import { TechnologyHeadingWithIcon } from '@/components/Entities/TechnologyHeadingWithIcon';
import icons from '@/data/icons';

interface EntityTechnologiesListProps {
  technologies: APIResponse[];
}

const EntityTechnologiesList = ({
  technologies,
}: EntityTechnologiesListProps) => {
  return (
    <>
      {technologies?.map(technology => (
        <React.Fragment key={technology.name}>
          <Box mt={8}>
            <TechnologyHeadingWithIcon
              icon={icons[technology.id]}
              label={technology.name}
            />
            <EntityTechnologyItemsList technology={technology} />
          </Box>
          <Divider my={8} />
        </React.Fragment>
      ))}
    </>
  );
};
export default EntityTechnologiesList;
