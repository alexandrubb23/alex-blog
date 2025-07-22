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
        <Grid templateRows="auto auto" gap="1.5rem">
          <Heading
            as={isHomePage ? "h3" : "h2"}
            fontSize={{
              sm: "1.25rem",
              md: "1.5rem",
              lg: "1.75rem",
              xl: "1.75rem",
              "2xl": "1.75rem",
            }}
            w="full"
            lineHeight={{
              sm: "1.75rem",
              md: "2rem",
              lg: "2.25rem",
              xl: "2.5rem",
              "2xl": "2.75rem",
            }}
          >
            {name}
          </Heading>
          <EntityTechnologyItemsList data={data} />
        </Grid>
      </GridItem>
    </>
  );
};

export default TechnologyList;
