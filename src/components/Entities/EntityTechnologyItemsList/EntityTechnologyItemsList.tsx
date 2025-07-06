import { VStack } from "@chakra-ui/react";

import { APIResponse, PostData } from "@/app/api/lib/models";
import { EntityItem } from "@/components/Entities/EntityItem";
import { useIsNotMobile } from "@/hooks";
import { Separator } from "@/components/Separator";
import { Fragment } from "react";
import { isNotLastElement } from "@/utils/array";

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
      {technology.data.map((postData: PostData, index) => (
        <Fragment key={postData.id}>
          <EntityItem postData={postData} />
          {isNotLastElement(technology.data, index) && (
            <Separator variant="dashed" />
          )}
        </Fragment>
      ))}
    </VStack>
  );
};

export default EntityTechnologyItemsList;
