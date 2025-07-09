import { Flex } from "@chakra-ui/react";

import PostAuthor, { type PostMetaProps } from "./PostAuthor";
import PostSocialShare from "./PostSocialShare";

const PageSubHeader = ({ readingTime, date }: PostMetaProps) => (
  <Flex
    borderBottom="6px double"
    borderColor="black"
    borderTop="2px solid"
    justify="space-between"
    mt="10px"
    padding="16px 0 16px 0"
    w="100%"
  >
    <PostAuthor readingTime={readingTime} date={date} />
    <PostSocialShare />
  </Flex>
);

export default PageSubHeader;
