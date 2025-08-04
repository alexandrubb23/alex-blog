import { Separator as ChakraSeparator, SeparatorProps } from "@chakra-ui/react";

const Separator = (props: SeparatorProps) => (
  <ChakraSeparator
    size="md"
    borderColor={{
      _dark: "gray.800",
    }}
    {...props}
  />
);

export default Separator;
