import { VStack } from '@chakra-ui/react';

import { APIResponse, PostData } from '@/app/api/lib/models';
import { EntityItem } from '@/components/Entities/EntityItem';
import { useIsNotMobile } from '@/hooks';

interface EntityTechnologyItemsListProps {
  technology: APIResponse;
}

const EntityTechnologyItemsList = ({
  technology,
}: EntityTechnologyItemsListProps) => {
  const isNotMobile = useIsNotMobile();

  return (
    <VStack align='left' spacing={2} pl={isNotMobile ? '3rem' : undefined}>
      {technology.data.map((postData: PostData) => (
        <EntityItem postData={postData} key={postData.id} />
      ))}
    </VStack>
  );
};

export default EntityTechnologyItemsList;
