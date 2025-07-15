import { Grid, GridItem } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import { Separator } from "@/components/Separator";
import { AnimatedBox } from "@/components/common/Layout";
import { isNotLastElement } from "@/utils/array";
import TechnologyList from "./TechnologyList";

interface EntityTechnologiesListProps {
  technologies: APIResponse[];
}

export const DIVIDER_MARGIN = "6px";

const EntityTechnologiesList = ({
  technologies,
}: EntityTechnologiesListProps) => {
  return (
    <>
      {technologies.map(({ id, name, data }, index) => {
        const isLastElement = isNotLastElement(technologies, index);
        return (
          <AnimatedBox delay={index * 100} key={id}>
            <Grid templateColumns="auto 1fr" mt="24px">
              <GridItem>
                <TechnologyHeadingWithIcon technology={id} />
              </GridItem>
              <TechnologyList name={name} data={data} />
            </Grid>

            {isLastElement && (
              <Separator
                mt="40px"
                mb={isLastElement ? "40px" : DIVIDER_MARGIN}
              />
            )}
          </AnimatedBox>
        );
      })}
    </>
  );
};

export default EntityTechnologiesList;
