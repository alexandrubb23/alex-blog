import { Separator as ChakraSeparator, SeparatorProps } from "@chakra-ui/react";

const Separator = (props: SeparatorProps) => (
  <ChakraSeparator size="md" borderColor="rule" {...props} />
);

export default Separator;
