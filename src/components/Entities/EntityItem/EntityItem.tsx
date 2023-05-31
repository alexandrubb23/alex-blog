import { Box } from '@chakra-ui/react';

import { PostData, Technology } from '@/app/api/lib/models';
import { Date, Link } from '@/components/common';
import { useEntitySlugWithPathname } from '@/hooks';
import { useEntityProvider } from '@/hooks/context';

interface EntityItemProps {
  entityItem: PostData;
  technologyId: Technology;
}

const EntityItem = ({ entityItem, technologyId }: EntityItemProps) => {
  const { entityType } = useEntityProvider();
  const { getSlug } = useEntitySlugWithPathname(entityType);

  const { title, date } = entityItem;

  return (
    <Box key={title}>
      <Link href={getSlug({ ...entityItem, topic: technologyId })}>
        {title}
      </Link>
      <Box textColor='grey'>
        <Date dateString={date} />
      </Box>
    </Box>
  );
};
export default EntityItem;
