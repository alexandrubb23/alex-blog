import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface IconLabelProps {
  icon: IconType;
  iconSize?: string | number;
  iconWrapperProps?: BoxProps;
  label?: string;
  labelWrapperProps?: BoxProps;
  showIcon?: boolean;
}

const IconLabel = ({
  icon: Icon,
  iconSize,
  iconWrapperProps,
  label,
  labelWrapperProps,
  showIcon = true,
}: IconLabelProps) => {
  return (
    <Flex alignItems="center">
      {showIcon && (
        <Box {...iconWrapperProps}>
          <Icon size={iconSize} />
        </Box>
      )}
      {label && <Box {...labelWrapperProps}>{label}</Box>}
    </Flex>
  );
};

export default IconLabel;
