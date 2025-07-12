import { Box, Grid, GridItem } from "@chakra-ui/react";

import type { APIResponse } from "@/app/api/lib/models";
import { TechnologyHeadingWithIcon } from "../Entities/TechnologyHeadingWithIcon";
import { Separator } from "../Separator";
import { Fragment } from "react";
import TechnologyList from "../Entities/EntityTechnologiesList/TechnologyList";

const isOdd = (num: number) => num % 2 === 1;

const CertificationsList = ({
  certifications,
}: {
  certifications: APIResponse[];
}) => (
  <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
    {certifications.map(({ id, data, name }, index) => {
      return (
        <Fragment key={id}>
          <GridItem
            key={id}
            borderLeft={
              isOdd(index) ? { base: "none", lg: "2px solid black" } : "none"
            }
            paddingLeft={index % 2 === 1 ? { base: "0", lg: "20px" } : "0"}
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
            <TechnologyList name={name} data={data} />
          </GridItem>

          {isOdd(index) && (
            <GridItem
              colSpan={{ base: 1, lg: 2 }}
              p={2}
              borderRadius="md"
              textAlign="center"
            >
              <Separator />
            </GridItem>
          )}
        </Fragment>
      );
    })}
  </Grid>
);

export default CertificationsList;
