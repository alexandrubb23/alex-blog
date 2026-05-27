import { Box, Flex, Heading } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { GlobalLink } from "@/components/common/Link";
import { PostMeta } from "@/components/common/PostMeta";
import { usePostHref } from "@/hooks/router";
import { formatReadingTime } from "@/utils/formatReadingTime";

interface EntityItemProps {
  postData: PostData;
}

const shortId = (id: string) => id.slice(0, 6).toUpperCase();

const EntityItem = ({ postData }: EntityItemProps) => {
  const href = usePostHref(postData);

  const { id, content, date, title, postType } = postData;
  const readingTime = formatReadingTime(content, id);

  return (
    <Box
      role="group"
      py={3}
      pl={{ base: 3, md: 4 }}
      borderLeft="1px solid"
      borderColor="rule"
      position="relative"
      transition="border-color 0.2s ease, background-color 0.2s ease"
      _hover={{
        borderColor: "iris",
        bg: "rgba(139,92,246,0.04)",
      }}
      css={{
        "& a:hover .post-title": { color: "var(--iris)" },
      }}
    >
      <Flex
        align="center"
        gap={3}
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.22em"
        textTransform="uppercase"
        color="ashMuted"
        mb={2}
      >
        <Box as="span" color="iris" fontWeight="700">
          [{shortId(id)}]
        </Box>
        <Box
          as="span"
          w="14px"
          h="1px"
          bg="currentColor"
          opacity={0.45}
          display="inline-block"
        />
        <PostMeta readingTime={readingTime} date={date} />
      </Flex>
      <GlobalLink href={href} entity={postType} slug={id}>
        <Heading
          key={title}
          as="h4"
          className="post-title"
          fontFamily="display"
          fontSize={{ base: "20px", md: "26px", lg: "30px" }}
          fontWeight="600"
          letterSpacing="-0.015em"
          lineHeight="1.2"
          color="bone"
          transition="color 0.2s ease"
          m={0}
        >
          {title}
        </Heading>
      </GlobalLink>
    </Box>
  );
};
export default EntityItem;
