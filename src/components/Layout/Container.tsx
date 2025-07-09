import { Box } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <Box
      maxWidth={{
        base: "100%",
        sm: "100%",
        md: "container.md",
        lg: "container.lg",
      }}
      padding="5"
      margin="0 auto"
    >
      {children}
    </Box>
  );
};

export default Container;
