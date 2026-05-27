import { Box, Flex, Heading } from "@chakra-ui/react";

import { ENTITIES } from "@/app/api/lib/constants";
import { MoreEntities } from "@/components/Entities/MoreEntities";
import Container from "@/components/Layout/Container";
import {
  CenteredSpinner,
  ErrorAlert,
  LABEL_PREFIX,
  TypewriterLabel,
} from "@/components/common";
import { useEntityQuery } from "@/hooks";
import { AnimationScroll } from "../Animations/AnimationScroll";
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

  if (!posts) return <ErrorAlert error="No related posts found." />;

  const { data: relatePosts = [] } = posts[0] ?? {};

  if (relatePosts.length === 0) {
    return null;
  }

  const count = String(relatePosts.length).padStart(2, "0");

  return (
    <Box
      bg="surface"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="rule"
      py={{ base: 10, md: 16 }}
      position="relative"
      overflow="hidden"
    >
      {/* faint grid texture */}
      <Box
        position="absolute"
        inset="0"
        opacity={{ base: 0.35, _dark: 0.4 }}
        pointerEvents="none"
        backgroundImage="linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)"
        backgroundSize="56px 56px"
      />
      <Container position="relative">
        <AnimationScroll offset={0}>
          <Flex
            align={{ base: "flex-start", md: "flex-end" }}
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            gap={3}
            pb={4}
            borderBottom="1px dashed"
            borderColor="rule"
          >
            <Box>
              <TypewriterLabel
                fontFamily="mono"
                fontSize="11px"
                fontWeight="500"
                letterSpacing="0.3em"
                textTransform="uppercase"
                color="iris"
                mb={2}
              >
                {`${LABEL_PREFIX} related_node`}
              </TypewriterLabel>
              <Flex align="baseline" gap={3} wrap="wrap">
                <Box
                  fontFamily="mono"
                  fontSize="12px"
                  fontWeight="500"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  color="ashMuted"
                >
                  class
                </Box>
                <Heading
                  as="h2"
                  fontFamily="display"
                  fontWeight="700"
                  fontSize={{ base: "28px", md: "40px", lg: "46px" }}
                  letterSpacing="-0.025em"
                  lineHeight="1"
                  color="bone"
                  textTransform="uppercase"
                  m={0}
                >
                  {topic}
                </Heading>
              </Flex>
            </Box>
            <Flex
              align="center"
              gap={3}
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.24em"
              textTransform="uppercase"
              color="ashMuted"
            >
              <Box>queue · {count}</Box>
              <Box w="22px" h="1px" bg="currentColor" opacity={0.45} />
              <Box>
                <Box as="span" color="signal" mr={1.5}>
                  ●
                </Box>
                ready
              </Box>
            </Flex>
          </Flex>
        </AnimationScroll>
        <MoreEntities data={relatePosts} />
      </Container>
    </Box>
  );
};

export default MoreFromEntity;
