import { VStack } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import { EntityItem } from "@/components/Entities/EntityItem";
import { Separator } from "@/components/Separator";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
import { isNotLastElement } from "@/utils/array";

interface EntityTechnologyItemsListProps {
  data: PostData[];
}

const EntityTechnologyItemsList = ({
  data,
}: EntityTechnologyItemsListProps) => (
  <VStack align="left" paddingRight={{ base: "0", sm: "48px" }}>
    {data.map((postData: PostData, index) => (
      <AnimationScroll key={postData.id} delay={index * 0.1}>
        <EntityItem postData={postData} />
        {isNotLastElement(data, index) && (
          <Separator variant="dashed" mt="15px" mb="15px" borderWidth="1px" />
        )}
      </AnimationScroll>
    ))}
  </VStack>
);

export default EntityTechnologyItemsList;
