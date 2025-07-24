import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";
import { PostMeta } from "../PostMeta";

export interface PostMetaProps {
  readingTime: string;
  date: string;
}

const PostAuthor = ({ readingTime, date }: PostMetaProps) => (
  <HStack gap={{ base: "12px", md: "16px" }}>
    <Avatar.Root size={{ base: "lg", md: "xl" }}>
      <Avatar.Fallback name={AUTHOR.NAME} />
      <Avatar.Image src={`/images/${AUTHOR.AVATAR}`} />
    </Avatar.Root>
    <Box>
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        fontWeight="500"
        lineHeight="1.2"
      >
        {AUTHOR.NAME}
      </Text>
      <PostMeta readingTime={readingTime} date={date} />
    </Box>
  </HStack>
);

export default PostAuthor;
