import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface IconLabelProps {
  icon: IconType;
  iconSize?: string | number;
  iconWrapperProps?: BoxProps;
  label?: string;
  labelWrapperProps?: BoxProps;
}

const IconLabel = ({
  icon: Icon,
  iconSize = 22,
  iconWrapperProps,
  label,
  labelWrapperProps,
}: IconLabelProps) => {
  return (
    <Flex alignItems="center">
      <Box {...iconWrapperProps}>
        <Icon size={iconSize} />
      </Box>
      {label && (
        <Box ml={2} {...labelWrapperProps}>
          {label}
        </Box>
      )}
    </Flex>
  );
};

export default IconLabel;
