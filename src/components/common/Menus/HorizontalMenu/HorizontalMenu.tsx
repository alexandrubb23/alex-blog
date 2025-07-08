import { Button, HStack } from "@chakra-ui/react";

import { MenuProps } from "@/components/common/Menus/models";
import { useColorMode, useNavigationMenu } from "@/hooks";

const HorizontalMenu = ({ data }: MenuProps) => {
  const { isActiveItem, handleItemClick } = useNavigationMenu();
  const { isDark } = useColorMode();

  return (
    <HStack w="100%" fontSize="12px">
      {data.map((item) => {
        const isActive = isActiveItem(item.id);

        return (
          <Button
            bg="transparent"
            textDecoration={isActive ? "line-through" : "none"}
            borderRadius="full"
            key={item.id}
            paddingX="10px"
            fontFamily="inter"
            paddingY="2px"
            onClick={handleItemClick(item.id)}
            height={7}
            fontSize="14px"
            fontWeight="500"
            color={isDark ? "white" : "black"}
          >
            {item.title}
          </Button>
        );
      })}
    </HStack>
  );
};

export default HorizontalMenu;
