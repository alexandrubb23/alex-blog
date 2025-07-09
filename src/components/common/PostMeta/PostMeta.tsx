import { Box } from "@chakra-ui/react";

import { Date } from "../Date";

export interface PostMetaProps {
  readingTime: string;
  date: string;
}

const PostMeta = ({ readingTime, date }: PostMetaProps) => (
  <Box display="flex" gap="0.5rem">
    <Box>{readingTime}</Box>
    <Box transform="translateY(-4px)">.</Box>
    <Date dateString={date} />
  </Box>
);

export default PostMeta;
