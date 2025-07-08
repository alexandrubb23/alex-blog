import { VStack } from "@chakra-ui/react";

import { APIResponse, PostData } from "@/app/api/lib/models";
import { EntityItem } from "@/components/Entities/EntityItem";
import { Separator } from "@/components/Separator";
import { isNotLastElement } from "@/utils/array";
import { Fragment } from "react";

interface EntityTechnologyItemsListProps {
  data: PostData[];
}

const EntityTechnologyItemsList = ({
  data,
}: EntityTechnologyItemsListProps) => (
  <VStack align="left" paddingRight={{ base: "0", sm: "48px" }}>
    {data.map((postData: PostData, index) => (
      <Fragment key={postData.id}>
        <EntityItem postData={postData} />
        {isNotLastElement(data, index) && (
          <Separator variant="dashed" mt="24px" mb="24px" />
        )}
      </Fragment>
    ))}
  </VStack>
);

export default EntityTechnologyItemsList;
