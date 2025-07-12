import { Grid, GridItem } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import { Separator } from "@/components/Separator";
import { AnimatedBox } from "@/components/common/Layout";
import { isNotLastElement } from "@/utils/array";
import { Fragment } from "react";
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
      {technologies.map(({ id, name, data }, index) => (
        <Fragment key={id}>
          <AnimatedBox delay={index * 100}>
            <Grid templateColumns="auto 1fr" mt="24px">
              <GridItem>
                <TechnologyHeadingWithIcon technology={id} />
              </GridItem>
              <TechnologyList name={name} data={data} />
            </Grid>

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
