import { Box, VStack } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import icons from "@/data/icons";
import { Divider } from "@/components/Divider";
import { Fragment } from "react";

interface EntityTechnologiesListProps {
  technologies: APIResponse[];
}

export const DIVIDER_MARGIN = "6px";

const EntityTechnologiesList = ({
  technologies,
}: EntityTechnologiesListProps) => {
  const getTechnologyIcon = (technology: string) => {
    const icon = technology as keyof typeof icons;
    return icons[icon];
  };

  return (
    <>
      {technologies?.map((technology, i) => (
        <Fragment key={technology.id}>
          <VStack mt={8} gap="24px">
            <TechnologyHeadingWithIcon
              icon={getTechnologyIcon(technology.id)}
              label={technology.name}
            />
            <EntityTechnologyItemsList technology={technology} />
          </VStack>
          <Divider
            mt="40px"
            mb={technologies.length - 1 !== i ? "40px" : DIVIDER_MARGIN}
          />
        </Fragment>
      ))}
    </>
  );
};

export default EntityTechnologiesList;
