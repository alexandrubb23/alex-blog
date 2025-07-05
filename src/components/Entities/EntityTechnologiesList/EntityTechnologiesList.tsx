import { Box, VStack } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import icons from "@/data/icons";
import { Divider } from "@/components/Divider";

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
        <>
          <VStack mt={8} gap="24px" key={technology.name}>
            <TechnologyHeadingWithIcon
              icon={getTechnologyIcon(technology.id)}
              label={technology.name}
            />
            <EntityTechnologyItemsList technology={technology} />
          </VStack>
          <Divider mt="40px" mb="40px" />
        </>
      ))}
    </>
  );
};

export default EntityTechnologiesList;
