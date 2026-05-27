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
      gap={{ base: "10px", md: "20px" }}
      height="100%"
      justifyContent="center"
      listStyleType="none"
      m={0}
      p={0}
      {...restProps}
    >
      {data.map((item) => {
        return (
          <Box as="li" key={item.id}>
            <GlobalLink
              href={item.id}
              fontFamily="mono"
              fontSize="11px"
              fontWeight="600"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="ash"
              paddingY="6px"
              position="relative"
              _hover={{ color: "iris" }}
              transition="color 0.2s ease"
              css={{
                "&::before": {
                  content: '">"',
                  marginRight: "6px",
                  color: "var(--iris)",
                  opacity: 0,
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  display: "inline-block",
                  transform: "translateX(-4px)",
                },
                "&:hover::before": {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              }}
            >
              {item.title}
            </GlobalLink>
          </Box>
        );
      })}
    </Box>
  );
};

export default MenuList;
