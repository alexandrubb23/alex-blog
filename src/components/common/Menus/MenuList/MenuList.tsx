import { Box, BoxProps, Link } from "@chakra-ui/react";

import { MenuProps } from "@/components/common/Menus/models";
import { useNavigationMenu } from "@/hooks";

type MenuListProps = MenuProps & BoxProps;

const MenuList = ({ data, ...restProps }: MenuListProps) => {
  const { isActiveItem, handleItemClick } = useNavigationMenu();

  return (
    <Box
      alignItems="center"
      as="ul"
      display="flex"
      gap="10px"
      height="100%"
      justifyContent="center"
      {...restProps}
    >
      {data.map((item) => (
        <li key={item.id}>
          <Link
            textDecoration={isActiveItem(item.id) ? "line-through" : "none"}
            borderRadius="full"
            paddingX="10px"
            fontFamily="inter"
            paddingY="2px"
            onClick={handleItemClick(item.id)}
            height={7}
            fontSize="14px"
            fontWeight="500"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </Box>
  );
};

export default MenuList;
