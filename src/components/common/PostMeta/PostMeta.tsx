import { Box, BoxProps } from "@chakra-ui/react";

import { Date } from "../Date";

export interface PostMetaProps extends BoxProps {
  readingTime: string;
  date: string;
}

const PostMeta = ({ readingTime, date }: PostMetaProps) => (
  <Box
    display="inline-flex"
    alignItems="center"
    gap="0.65rem"
    fontFamily="mono"
    fontSize="12px"
    letterSpacing="0.04em"
    fontVariantNumeric="tabular-nums"
    color="ash"
  >
    <Box>{readingTime}</Box>
    <Box opacity={0.45}>·</Box>
    <Date dateString={date} />
  </Box>
);

export default PostMeta;
