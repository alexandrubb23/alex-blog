import { Box, Grid, GridItem } from "@chakra-ui/react";

import type { APIResponse } from "@/app/api/lib/models";
import { useIsNotMobile } from "@/hooks";
import { isEven, isOdd } from "@/utils/bool";
import { Fragment } from "react";
import TechnologyList from "../Entities/EntityTechnologiesList/TechnologyList";
import { TechnologyHeadingWithIcon } from "../Entities/TechnologyHeadingWithIcon";
import { Separator } from "../Separator";
import { AnimationScroll } from "../common/Animations/AnimationScroll";

const CertificationsList = ({
  certifications,
}: {
  certifications: APIResponse[];
}) => {
  const isNotMobile = useIsNotMobile();

  return (
    <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
      {certifications.map(({ id, data, name }, index) => {
        return (
          <Fragment key={id}>
            <AnimationScroll>
              <GridItem
                key={id}
                borderLeft={
                  isOdd(index)
                    ? { base: "none", lg: "2px solid black" }
                    : "none"
                }
                paddingLeft={isOdd(index) ? { base: "0", lg: "20px" } : "0"}
              >
                <AnimationScroll
                  animation="backInOut"
                  key={isNotMobile ? id : `${id}-${index}`}
                  direction={
                    isNotMobile ? (isEven(index) ? "right" : "left") : "up"
                  }
                >
                  <Box
                    alignItems="center"
                    bg="header"
                    borderRadius="24px"
                    display="flex"
                    height="190px"
                    justifyContent="center"
                    mb="16px"
                  >
                    <TechnologyHeadingWithIcon
                      technology={id}
                      iconSize="70"
                      iconBoxStyle={{
                        bg: "none",
                        color: "primary",
                      }}
                    />
                  </Box>
                </AnimationScroll>
                <TechnologyList name={name} data={data} />
              </GridItem>
            </AnimationScroll>

            {isOdd(index) && (
              <GridItem
                colSpan={{ base: 1, lg: 2 }}
                p={2}
                borderRadius="md"
                textAlign="center"
              >
                <AnimationScroll key={isNotMobile ? id : `${id}-${index}`}>
                  <Separator />
                </AnimationScroll>
              </GridItem>
            )}
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default CertificationsList;
