import { List } from "@chakra-ui/react";

import { isEven } from "@/utils/bool";
import { Separator } from "../Separator";
import { AnimationScroll } from "../common/Animations/AnimationScroll";
import { TechnologyListProps } from "./TechnologyListProps";

const ANIMATION_DURATION_EVEN = 0.8;
const ANIMATION_DURATION_ODD = 1.2;

const DesktopTechnologySelector = ({
  technologies,
  handleItemClick,
  selectedId,
}: TechnologyListProps) => {
  return (
    <List.Root
      display="flex"
      flexDirection="row"
      gap="28px"
      listStyleType="none"
    >
      {technologies.map((technology, index) => (
        <AnimationScroll
          offset={(index + 1) * 20}
          key={technology}
          direction="down"
          animation="backInOut"
          duration={
            isEven(index) ? ANIMATION_DURATION_EVEN : ANIMATION_DURATION_ODD
          }
        >
          <List.Item
            key={technology}
            onClick={handleItemClick(technology)}
            cursor="pointer"
          >
            {technology}
            {(selectedId === technology || (!selectedId && index === 0)) && (
              <Separator size="md" borderColor="black" />
            )}
          </List.Item>
        </AnimationScroll>
      ))}
    </List.Root>
  );
};

export default DesktopTechnologySelector;
