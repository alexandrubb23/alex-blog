import { List } from "@chakra-ui/react";

import { isEven } from "@/utils/bool";
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
      {technologies.map((technology, index) => {
        const isSelected =
          selectedId === technology || (!selectedId && index === 0);

        return (
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
              color={{
                base: isSelected ? "black" : "gray.500",
                _dark: isSelected ? "gray.100" : "inherit",
              }}
              borderBottom={
                isSelected
                  ? "2px solid {colors.primary}"
                  : "2px solid transparent"
              }
              pb={1.7}
              transition="all 0.3s ease-in-out"
              _hover={{
                color: {
                  base: "black",
                  _dark: "gray.100",
                },
              }}
            >
              {technology}
            </List.Item>
          </AnimationScroll>
        );
      })}
    </List.Root>
  );
};

export default DesktopTechnologySelector;
