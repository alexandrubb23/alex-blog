import { Box, Grid, GridItem } from "@chakra-ui/react";

import type { APIResponse } from "@/app/api/lib/models";
import { CornerTicks } from "@/components/common";
import { useIsNotMobile } from "@/hooks";
import { isEven, isOdd } from "@/utils/bool";
import { Fragment } from "react";
import TechnologyList from "../Entities/EntityTechnologiesList/TechnologyList";
import { TechnologyHeadingWithIcon } from "../Entities/TechnologyHeadingWithIcon";
import { AnimationScroll } from "../common/Animations/AnimationScroll";
import { DoubleSeparator } from "../common/DoubleSeparator";

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
                  isOdd(index) ? { base: "none", lg: "1px dashed" } : "none"
                }
                borderColor="rule"
                paddingLeft={isOdd(index) ? { base: "0", lg: "24px" } : "0"}
              >
                <AnimationScroll
                  animation="backInOut"
                  key={isNotMobile ? id : `${id}-${index}`}
                  direction={
                    isNotMobile ? (isEven(index) ? "right" : "left") : "up"
                  }
                >
                  <Box
                    position="relative"
                    border="1px solid"
                    borderColor="rule"
                    bg="surface"
                    height="160px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb="20px"
                    backgroundImage="linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)"
                    backgroundSize="32px 32px"
                    transition="border-color 0.2s ease"
                    _hover={{ borderColor: "iris" }}
                  >
                    <CornerTicks />
                    <TechnologyHeadingWithIcon
                      technology={id}
                      iconSize="52"
                      iconBoxStyle={{
                        bg: "none",
                        color: "iris",
                      }}
                    />
                  </Box>
                </AnimationScroll>
                <TechnologyList name={name} data={data} />
              </GridItem>
            </AnimationScroll>

            {isOdd(index) && (
              <GridItem colSpan={{ base: 1, lg: 2 }} py={2}>
                <AnimationScroll key={isNotMobile ? id : `${id}-${index}`}>
                  <DoubleSeparator mt={0} mb={0} />
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
