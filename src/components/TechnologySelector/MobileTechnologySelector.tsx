import { IconButton, Menu, Portal } from "@chakra-ui/react";

import { IoFilterSharp } from "react-icons/io5";
import { TechnologyHeadingWithIcon } from "../Entities/TechnologyHeadingWithIcon";
import { TechnologyListProps } from "./TechnologyListProps";

const MobileTechnologySelector = ({
  technologies,
  handleItemClick,
}: TechnologyListProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild outline="none">
        <IconButton bg="transparent" color="primary" aria-label="Menu">
          <IoFilterSharp />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            minW="fit-content"
            display="flex"
            gap={1}
            flexDirection="column"
          >
            {technologies.map((technology) => (
              <Menu.Item
                _hover={{ borderRadius: "full" }}
                cursor="pointer"
                display={"flex"}
                flexDir="column"
                key={technology}
                onClick={handleItemClick(technology)}
                padding={0}
                value={technology}
              >
                <TechnologyHeadingWithIcon
                  technology={technology}
                  iconSize={15}
                  key={technology}
                  iconBoxStyle={{
                    bg: "non",
                    color: "primary",
                    padding: 2,
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
