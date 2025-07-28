import { Box, Grid, GridItem } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import { Separator } from "@/components/Separator";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
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
          <AnimationScroll key={id} threshold={0.02}>
            <Grid templateColumns="auto 1fr" mt="24px">
              <GridItem>
                <TechnologyHeadingWithIcon
                  technology={id}
                  iconBoxStyle={{
                    hideBelow: "md",
                  }}
                />
              </GridItem>
              <GridItem>
                <Box
                  alignItems="center"
                  height="fit-content"
                  justifyContent="center"
                  display="flex"
                >
                  <TechnologyHeadingWithIcon
                    technology={id}
                    iconBoxStyle={{
                      hideFrom: "md",
                      marginBottom: 4,
                    }}
                  />
                </Box>
                <TechnologyList name={name} data={data} />
              </GridItem>
            </Grid>

            {isLastElement && (
              <AnimationScroll key={id}>
                <Separator
                  mt="40px"
                  mb={isLastElement ? "40px" : DIVIDER_MARGIN}
                />
              </AnimationScroll>
            )}
          </AnimationScroll>
        );
      })}
    </>
  );
};

export default EntityTechnologiesList;
