import { IconButton, Menu, Portal } from "@chakra-ui/react";

import { IoFilterSharp } from "react-icons/io5";
import { TechnologyHeadingWithIcon } from "../Entities/TechnologyHeadingWithIcon";
import { TechnologyListProps } from "./TechnologyListProps";

const MobileTechnologySelector = ({
  technologies,
  handleItemClick,
  selectedId,
}: TechnologyListProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild outline="none">
        <IconButton
          bg="transparent"
          color="primary"
          aria-label="Menu"
          size="2xl"
          h="2rem"
        >
          <IoFilterSharp />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            minW="fit-content"
            display="flex"
            gap={2}
            flexDirection="column"
          >
            {technologies.map((technology, index) => (
              <Menu.Item
                cursor="pointer"
                display={"flex"}
                flexDir="column"
                key={technology}
                onClick={handleItemClick(technology)}
                padding={0}
                value={technology}
                borderRadius="full"
                bg={
                  selectedId === technology || (!selectedId && index === 0)
                    ? "header"
                    : "transparent"
                }
              >
                <TechnologyHeadingWithIcon
                  technology={technology}
                  iconSize={20}
                  key={technology}
                  iconBoxStyle={{
                    bg: "non",
                    color: "primary",
                    padding: 3,
                  }}
                />
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default MobileTechnologySelector;
