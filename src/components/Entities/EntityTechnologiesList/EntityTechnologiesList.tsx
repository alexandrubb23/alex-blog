import { Box, VStack } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import icons from "@/data/icons";
import { Separator } from "@/components/Separator";
import { Fragment } from "react";
import { isNotLastElement } from "@/utils/array";
import { AnimatedBox } from "@/components/common/Layout";

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
      {technologies?.map((technology, index) => (
        <Fragment key={technology.id}>
          <AnimatedBox delay={index * 100}>
            <VStack mt={8} gap="24px">
              <TechnologyHeadingWithIcon
                icon={getTechnologyIcon(technology.id)}
                label={technology.name}
              />
              <EntityTechnologyItemsList technology={technology} />
            </VStack>

            <Separator
              mt="40px"
              mb={
                isNotLastElement(technologies, index) ? "40px" : DIVIDER_MARGIN
              }
            />
          </AnimatedBox>
        </Fragment>
      ))}
    </>
  );
};

export default EntityTechnologiesList;
