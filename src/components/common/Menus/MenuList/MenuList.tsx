import { Box, BoxProps } from "@chakra-ui/react";

import { MenuProps } from "@/components/common/Menus/models";
import { GlobalLink } from "../../Link";

type MenuListProps = MenuProps & BoxProps;

const MenuList = ({ data, ...restProps }: MenuListProps) => {
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
      {data.map((item) => {
        return (
          <li key={item.id}>
            <GlobalLink
              borderRadius="full"
              paddingX="10px"
              fontFamily="inter"
              paddingY="2px"
              href={item.id}
              height={7}
              fontWeight="500"
            >
              {item.title}
            </GlobalLink>
          </li>
        );
      })}
    </Box>
  );
};

export default MenuList;
