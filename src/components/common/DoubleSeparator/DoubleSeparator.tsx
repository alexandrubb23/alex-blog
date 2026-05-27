import { Box, BoxProps } from "@chakra-ui/react";

import { PulsateDot } from "@/components/common";

const DoubleSeparator = (props: BoxProps) => (
  <Box
    display="flex"
    alignItems="center"
    gap="0.85rem"
    width="100%"
    mt="32px"
    mb="32px"
    {...props}
  >
    <Box w="6px" h="6px" border="1px solid" borderColor="iris" flexShrink={0} />
    <Box
      flex="1"
      h="1px"
      bg="rule"
      backgroundImage="repeating-linear-gradient(90deg, var(--rule) 0 8px, transparent 8px 16px)"
    />
    <PulsateDot shape="square" bg="iris" boxShadow="0 0 12px var(--iris)" />
    <Box
      flex="1"
      h="1px"
      bg="rule"
      backgroundImage="repeating-linear-gradient(90deg, var(--rule) 0 8px, transparent 8px 16px)"
    />
    <Box w="6px" h="6px" border="1px solid" borderColor="iris" flexShrink={0} />
  </Box>
);

export default DoubleSeparator;
