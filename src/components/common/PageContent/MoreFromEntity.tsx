import { Box, HStack, Heading } from "@chakra-ui/react";

import { ENTITIES } from "@/app/api/lib/constants";
import { MoreEntities } from "@/components/Entities/MoreEntities";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import Container from "@/components/Layout/Container";
import { CenteredSpinner, ErrorAlert } from "@/components/common";
import { useEntityQuery } from "@/hooks";
import { usePostContext } from "./PostProvider";

const MoreFromEntity = ({ limit }: { limit: number }) => {
  const { topic, id } = usePostContext();

  const { data: posts, isLoading } = useEntityQuery({
    entity: ENTITIES.POSTS,
    queryFilter: {
      limit,
      topic,
      excludePost: id,
    },
  });

  if (isLoading)
    return (
      <Container>
        <CenteredSpinner height="200px" />
      </Container>
    );

  if (!posts) return <ErrorAlert error="No related posts found. aa" />;

  const { data: relatePosts = [] } = posts[0] ?? {};

  if (relatePosts.length === 0) {
    return null;
  }

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
          <MoreEntities data={relatePosts} />
        </HStack>
      </Container>
    </Box>
  );
};

export default MoreFromEntity;
