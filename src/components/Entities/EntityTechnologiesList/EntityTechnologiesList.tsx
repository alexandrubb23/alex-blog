import { Flex, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import { Separator } from "@/components/Separator";
import { AnimatedBox } from "@/components/common/Layout";
import icons from "@/data/icons";
import { isNotLastElement } from "@/utils/array";
import { Fragment } from "react";
import { useIsHomePage, useIsNotMobile } from "@/hooks";

interface EntityTechnologiesListProps {
  technologies: APIResponse[];
}

export const DIVIDER_MARGIN = "6px";

const EntityTechnologiesList = ({
  technologies,
}: EntityTechnologiesListProps) => {
  const isHomePage = useIsHomePage();
  const isNotMobile = useIsNotMobile();

  return (
    <>
      {technologies.map((technology, index) => (
        <Fragment key={technology.id}>
          <AnimatedBox delay={index * 100}>
            <Grid templateColumns="auto 1fr" mt="24px">
              <GridItem>
                <TechnologyHeadingWithIcon technology={technology} />
              </GridItem>
              <GridItem pl={isNotMobile ? "12px" : 0}>
                <Grid templateRows="auto auto" gap={4}>
                  <Heading
                    as={isHomePage ? "h3" : "h2"}
                    fontSize="28px"
                    w="full"
                  >
                    {technology.name}
                  </Heading>
                  <EntityTechnologyItemsList technology={technology} />
                </Grid>
              </GridItem>
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
