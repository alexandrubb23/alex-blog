import { VStack } from '@chakra-ui/react';

import { APIResponse, PostData } from '@/app/api/lib/models';
import { EntityItem } from '@/components/Entities/EntityItem';
import { useIsNotMobile } from '@/hooks';

interface EntityItemsListProps {
  technology: APIResponse;
}

const EntityItemsList = ({ technology }: EntityItemsListProps) => {
  const isNotMobile = useIsNotMobile();

  return (
    <VStack align='left' spacing={2} pl={isNotMobile ? '3rem' : undefined}>
      {technology.data.map((entityItem: PostData) => (
        <EntityItem
          entityItem={entityItem}
          key={entityItem.id}
          technologyId={technology.id}
        />
      ))}
    </VStack>
  );
};

export default EntityItemsList;