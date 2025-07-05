import { Box, ChakraComponent, HTMLChakraProps } from "@chakra-ui/react";
import React, { CSSProperties } from "react";

type DivChakraProps = HTMLChakraProps<"div">;

const Divider = (props: DivChakraProps) => (
  <Box divideY="2px" divideColor="black" {...props}>
    <div />
    <div />
  </Box>
);

export default Divider;
