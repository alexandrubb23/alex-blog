import { Heading } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const PageHeading = ({ children }: PropsWithChildren) => (
  <Heading
    as="h1"
    fontFamily="display"
    fontSize={{
      base: "28px",
      sm: "32px",
      md: "40px",
      lg: "46px",
    }}
    fontWeight="700"
    letterSpacing="-0.025em"
    lineHeight="1.1"
    textAlign="center"
    textTransform="uppercase"
    color="bone"
  >
    {children}
  </Heading>
);

export default PageHeading;
