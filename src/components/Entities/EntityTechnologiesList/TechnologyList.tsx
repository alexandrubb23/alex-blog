import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
import { useIsNotMobile } from "@/hooks";

export const DIVIDER_MARGIN = "6px";

export const TechnologyList = ({
  name,
  data,
}: {
  name: string;
  data: PostData[];
}) => {
  const isNotMobile = useIsNotMobile();

  return (
    <>
      <GridItem pl={isNotMobile ? "12px" : 0}>
        <Grid templateRows="auto auto" gap="1.5rem">
          <AnimationScroll>
            <Box
              display="flex"
              alignItems="center"
              gap={3}
              w="full"
              justifyContent={{ base: "center", md: "flex-start" }}
              userSelect="none"
            >
              <Box
                fontFamily="mono"
                fontSize="10px"
                fontWeight="500"
                letterSpacing="0.24em"
                textTransform="uppercase"
                color="ashMuted"
              >
                §
              </Box>
              <Heading
                as="h3"
                fontFamily="mono"
                fontWeight="500"
                fontSize={{ base: "11px", md: "12px" }}
                letterSpacing="0.28em"
                textTransform="uppercase"
                color="ash"
                m={0}
              >
                {name}
              </Heading>
              <Box
                flex="1"
                h="1px"
                bg="rule"
                display={{ base: "none", md: "block" }}
              />
            </Box>
          </AnimationScroll>
          <EntityTechnologyItemsList data={data} />
        </Grid>
      </GridItem>
    </>
  );
};

export default TechnologyList;
