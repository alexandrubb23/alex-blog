import { Flex } from "@chakra-ui/react";

import { formatReadingTime } from "@/utils/formatReadingTime";
import PostAuthor from "./PostAuthor";
import { usePostContext } from "./PostProvider";
import SocialShareButtons from "./SocialShareButtons";

const PageSubHeader = () => {
  const { id, content, date } = usePostContext();
  const readingTime = formatReadingTime(content, id);

  return (
    <Flex
      borderBottom="6px double"
      borderColor="black"
      borderTop="2px solid"
      justify="space-between"
      flexDir={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
      }}
      gap="1.2rem"
      mt="10px"
      padding="16px 0 16px 0"
      w="100%"
      fontSize={{ base: "12px", sm: "sm" }}
    >
      <PostAuthor readingTime={readingTime} date={date} />
      <SocialShareButtons />
    </Flex>
  );
};

export default PageSubHeader;
