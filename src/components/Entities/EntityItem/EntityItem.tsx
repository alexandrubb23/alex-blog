import { Box } from '@chakra-ui/react';

import { Date, Link } from '@/components/common';
import { Certificate } from '@/services/certifications-service';
import { useEntitySlugWithPathname } from '@/hooks';
import { FetchResponse } from '@/services';

interface EntityItemProps {
  entityItem: FetchResponse;
  entityType: 'posts' | 'certifications';
  technologyId: string;
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
