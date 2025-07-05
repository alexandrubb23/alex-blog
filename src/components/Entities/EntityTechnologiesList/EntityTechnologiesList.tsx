import { Box } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import icons from "@/data/icons";

interface EntityTechnologiesListProps {
  technologies: APIResponse[];
}

const EntityTechnologiesList = ({
  technologies,
}: EntityTechnologiesListProps) => {
  const getTechnologyIcon = (technology: string) => {
    const icon = technology as keyof typeof icons;
    return icons[icon];
  };

  return (
    <>
      {technologies?.map((technology) => (
        <Box mt={8} key={technology.name} divideY="2px" divideColor="gray.200">
          <TechnologyHeadingWithIcon
            icon={getTechnologyIcon(technology.id)}
            label={technology.name}
          />
          <EntityTechnologyItemsList technology={technology} />
        </Box>
      ))}
    </>
  );
};
export default EntityTechnologiesList;
