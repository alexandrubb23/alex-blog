import { Box } from '@chakra-ui/react';

import { Entity, PostData } from '@/app/api/lib/models';
import { Date, Link } from '@/components/common';
import { useEntitySlugWithPathname } from '@/hooks';
import { Technology } from '@/app/api/lib/models';

interface EntityItemProps {
  entityItem: PostData;
  entityType: Entity;
  technologyId: Technology;
}

const EntityItem = ({
  entityItem,
  entityType,
  technologyId,
}: EntityItemProps) => {
  const { title, date } = entityItem;

  const { getSlug } = useEntitySlugWithPathname(entityType);

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
