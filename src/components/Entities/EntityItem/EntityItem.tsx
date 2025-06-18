import { Box } from '@chakra-ui/react';

import { PostData } from '@/app/api/lib/models';
import { Link } from '@/components/common';
import { PostMeta } from '@/components/common/PostMeta';
import { usePostHref } from '@/hooks/router';
import { formatReadingTime } from '@/utils/formatReadingTime';

interface EntityItemProps {
  postData: PostData;
}

const EntityItem = ({ postData }: EntityItemProps) => {
  const href = usePostHref(postData);

  const { id, content, date, title } = postData;
  const readingTime = formatReadingTime(content, id);

  return (
    <Box key={title}>
      <Link href={href}>{title}</Link>
      <PostMeta readingTime={readingTime} date={date} />
    </Box>
  );
};
export default EntityItem;
