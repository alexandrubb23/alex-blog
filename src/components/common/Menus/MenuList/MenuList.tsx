import { Box, BoxProps, Link } from "@chakra-ui/react";

import { MenuProps } from "@/components/common/Menus/models";
import { useNavigationMenu } from "@/hooks";

type MenuListProps = MenuProps & BoxProps;

const MenuList = ({ data, ...restProps }: MenuListProps) => {
  const { isActiveItem, handleItemClick } = useNavigationMenu();

  const textDecoration = (id: string) =>
    isActiveItem(id) ? "line-through" : "none";

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
            textDecoration={textDecoration(item.id)}
            color={isActiveItem(item.id) ? "primary" : "black"}
            borderRadius="full"
            paddingX="10px"
            fontFamily="inter"
            paddingY="2px"
            onClick={handleItemClick(item.id)}
            height={7}
            fontWeight="500"
            _hover={{
              textDecoration: textDecoration(item.id),
              color: "primary",
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </Box>
  );
};

export default MenuList;
