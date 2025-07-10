import { Box, HStack, Heading } from "@chakra-ui/react";

import { ENTITIES } from "@/app/api/lib/constants";
import type { Technology } from "@/app/api/lib/models";
import { MoreEntities } from "@/components/Entities/MoreEntities";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import Container from "@/components/Layout/Container";
import { ErrorAlert } from "@/components/common";
import { useEntityQuery } from "@/hooks";
import type { QueryFilter } from "@/app/api/lib/sql/getAllPosts";

const MoreFromEntity = (queryFilter: Required<QueryFilter>) => {
  const { data } = useEntityQuery({ entity: ENTITIES.POSTS, queryFilter });

  if (!data) return <ErrorAlert error="No related posts found." />;

  const topic = queryFilter.topic;
  const relatedPost = data[0].data;

  return (
    <Box bg="header">
      <Container>
        <Heading
          as="h2"
          borderBottom="1.5px solid black"
          fontSize="2rem"
          fontWeight="500"
          pb="1rem"
        >
          <TechnologyHeadingWithIcon
            label={`More from ${topic}`}
            technology={topic}
          />
        </Heading>
        <HStack mt="25px" gap="1rem">
          <MoreEntities data={relatedPost} />
        </HStack>
      </Container>
    </Box>
  );
};

export default MoreFromEntity;
