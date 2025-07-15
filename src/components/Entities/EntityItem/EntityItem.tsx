import { Heading } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { Link } from "@/components/common";
import { PostMeta } from "@/components/common/PostMeta";
import { usePostHref } from "@/hooks/router";
import { formatReadingTime } from "@/utils/formatReadingTime";

interface EntityItemProps {
  postData: PostData;
}

const EntityItem = ({ postData }: EntityItemProps) => {
  const href = usePostHref(postData);

  const { id, content, date, title } = postData;
  const readingTime = formatReadingTime(content, id);

  return (
    <>
      <Heading
        key={title}
        as="h4"
        fontSize="24px"
        fontWeight={500}
        _hover={{ textDecoration: "underline", color: "primary" }}
      >
        <Link href={href}>{title}</Link>
      </Heading>
      <PostMeta readingTime={readingTime} date={date} />
    </>
  );
};
export default EntityItem;
