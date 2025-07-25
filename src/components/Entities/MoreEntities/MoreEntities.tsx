import { Box, Card, Grid, GridItem, Image } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { AUTHOR } from "@/app/constants";
import { Date } from "@/components/common";
import PostLink from "@/components/common/Link/PostLink";

interface MoreEntitiesProps {
  data: PostData[];
}

const MoreEntities = ({ data }: MoreEntitiesProps) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap="1rem"
      mt="25px"
    >
      {data.map(({ date, id, image, title }) => (
        <GridItem key={id} w="100%">
          <Card.Root bg="transparent" border="none" w="100%" overflow="hidden">
            <Box boxSize="260px" overflow={"hidden"} w="100%">
              <Image
                alt={title}
                borderRadius="md"
                h="100%"
                objectFit="cover"
                src={image}
                w="100%"
              />
            </Box>
            <Card.Body gap="2" mt="12px" padding="0">
              <Card.Title fontSize="24px" fontWeight="600">
                <PostLink slug={id}>{title}</PostLink>
              </Card.Title>
              <Card.Description
                color="gray.500"
                fontSize="14px"
                lineHeight="1.4"
              >
                You may like <Box as="strong">{title}</Box> written by &nbsp;
                <Box as="strong">{AUTHOR.NAME}</Box>, published on &nbsp;
                <Box as="strong">
                  <Date dateString={date} />
                </Box>
                ... &nbsp;<PostLink slug={id}>read more</PostLink>
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
      ))}
    </Grid>
  );
};

export default MoreEntities;
