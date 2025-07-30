import { Box, BoxProps } from "@chakra-ui/react";

const DoubleSeparator = (props: BoxProps) => (
  <Box
    borderBottom="6px double"
    width="100%"
    mt="32px"
    mb="32px"
    borderColor={{
      _dark: "gray.800",
    }}
    {...props}
  />
);

export default DoubleSeparator;
