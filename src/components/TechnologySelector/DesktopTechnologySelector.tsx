import { List } from "@chakra-ui/react";

import { Separator } from "../Separator";
import { TechnologyListProps } from "./TechnologyListProps";

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
      ))}
    </List.Root>
  );
};

export default DesktopTechnologySelector;
