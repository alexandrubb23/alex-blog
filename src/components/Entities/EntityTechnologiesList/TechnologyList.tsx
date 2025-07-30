import { Grid, GridItem, Heading } from "@chakra-ui/react";

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
            <Heading
              as="h3"
              fontSize={{
                sm: "20px",
                md: "26px",
                lg: "28px",
              }}
              w="full"
              textAlign={{
                base: "center",
                md: "left",
              }}
            >
              {name}
            </Heading>
          </AnimationScroll>
          <EntityTechnologyItemsList data={data} />
        </Grid>
      </GridItem>
    </>
  );
};

export default TechnologyList;
