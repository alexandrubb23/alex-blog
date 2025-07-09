import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";
import { PostMeta } from "../PostMeta";

export interface PostMetaProps {
  readingTime: string;
  date: string;
}

const PostAuthor = ({ readingTime, date }: PostMetaProps) => (
  <HStack gap="16px">
    <Avatar.Root size="xl">
      <Avatar.Fallback name={AUTHOR.NAME} />
      <Avatar.Image src={`/images/${AUTHOR.AVATAR}`} />
    </Avatar.Root>
    <Box>
      <Text fontSize="18" fontWeight="500">
        {AUTHOR.NAME}
      </Text>
      <PostMeta readingTime={readingTime} date={date} />
    </Box>
  </HStack>
);

export default PostAuthor;
