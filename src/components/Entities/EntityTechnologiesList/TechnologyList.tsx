import { Grid, GridItem, Heading } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { EntityTechnologyItemsList } from "@/components/Entities/EntityTechnologyItemsList";
import { useIsHomePage, useIsNotMobile } from "@/hooks";

export const DIVIDER_MARGIN = "6px";

export const TechnologyList = ({
  name,
  data,
}: {
  name: string;
  data: PostData[];
}) => {
  const isHomePage = useIsHomePage();
  const isNotMobile = useIsNotMobile();

  return (
    <>
      <GridItem pl={isNotMobile ? "12px" : 0}>
        <Grid templateRows="auto auto" gap={4}>
          <Heading as={isHomePage ? "h3" : "h2"} fontSize="28px" w="full">
            {name}
          </Heading>
          <EntityTechnologyItemsList data={data} />
        </Grid>
      </GridItem>
    </>
  );
};

export default TechnologyList;
