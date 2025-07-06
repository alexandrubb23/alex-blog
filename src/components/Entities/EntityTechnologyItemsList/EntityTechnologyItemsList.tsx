import { VStack } from "@chakra-ui/react";

import { APIResponse, PostData } from "@/app/api/lib/models";
import { EntityItem } from "@/components/Entities/EntityItem";
import { Separator } from "@/components/Separator";
import { isNotLastElement } from "@/utils/array";
import { Fragment } from "react";

interface EntityTechnologyItemsListProps {
  technology: APIResponse;
}

const EntityTechnologyItemsList = ({
  technology,
}: EntityTechnologyItemsListProps) => (
  <VStack align="left" gap="24px" paddingRight={{ base: "0", sm: "48px" }}>
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

export default EntityTechnologyItemsList;
