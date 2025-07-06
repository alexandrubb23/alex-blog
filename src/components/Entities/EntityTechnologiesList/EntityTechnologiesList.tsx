import { VStack } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import { Separator } from "@/components/Separator";
import { AnimatedBox } from "@/components/common/Layout";
import icons from "@/data/icons";
import { isNotLastElement } from "@/utils/array";
import { Fragment } from "react";

interface EntityTechnologiesListProps {
  technologies: APIResponse[];
}

export const DIVIDER_MARGIN = "6px";

const EntityTechnologiesList = ({
  technologies,
}: EntityTechnologiesListProps) => (
  <>
    {technologies.map((technology, index) => (
      <Fragment key={technology.id}>
        <AnimatedBox delay={index * 100}>
          <VStack mt={8} gap="24px">
            <TechnologyHeadingWithIcon technology={technology} />
            <EntityTechnologyItemsList technology={technology} />
          </VStack>

          <Separator
            mt="40px"
            mb={isNotLastElement(technologies, index) ? "40px" : DIVIDER_MARGIN}
          />
        </AnimatedBox>
      </Fragment>
    ))}
  </>
);

export default EntityTechnologiesList;
