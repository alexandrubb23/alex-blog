import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface IconLabelProps {
  icon: IconType;
  iconSize?: string | number;
  iconWrapperProps?: BoxProps;
  label: string;
  labelWrapperProps?: BoxProps;
}

const IconLabel = ({
  icon: Icon,
  iconSize,
  iconWrapperProps,
  label,
  labelWrapperProps,
}: IconLabelProps) => {
  return (
    <Flex alignItems='center'>
      <Box marginRight={2} {...iconWrapperProps}>
        <Icon size={iconSize} />
      </Box>
      <Box {...labelWrapperProps}>{label}</Box>
    </Flex>
  );
};

export default IconLabel;
