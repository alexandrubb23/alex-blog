import { VStack } from "@chakra-ui/react";

import { APIResponse, PostData } from "@/app/api/lib/models";
import { EntityItem } from "@/components/Entities/EntityItem";
import { useIsNotMobile } from "@/hooks";
import { Divider } from "@/components/Divider";
import { Fragment } from "react";

interface EntityTechnologyItemsListProps {
  technology: APIResponse;
}

const EntityTechnologyItemsList = ({
  technology,
}: EntityTechnologyItemsListProps) => {
  const isNotMobile = useIsNotMobile();

  return (
    <VStack
      align="left"
      gap="24px"
      pl={isNotMobile ? "3rem" : undefined}
      w="full"
    >
      {technology.data.map((postData: PostData) => (
        <Fragment key={postData.id}>
          <EntityItem postData={postData} />
          <Divider divideStyle="dashed" />
        </Fragment>
      ))}
    </VStack>
  );
};

export default EntityTechnologyItemsList;
