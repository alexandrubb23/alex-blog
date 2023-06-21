import { Box } from '@chakra-ui/react';

import { PostData } from '@/app/api/lib/models';
import { Date, Link } from '@/components/common';
import { usePostHref } from '@/hooks/router';

interface EntityItemProps {
  postData: PostData;
}

const EntityItem = ({ postData }: EntityItemProps) => {
  const href = usePostHref(postData);

  const { date, title } = postData;

  return (
    <Box key={title}>
      <Link href={href}>{title}</Link>
      <Box textColor='grey'>
        <Date dateString={date} />
      </Box>
    </Box>
  );
};
export default EntityItem;
