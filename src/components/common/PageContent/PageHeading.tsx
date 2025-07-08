import { Heading } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

const PageHeading = ({ children }: PropsWithChildren) => (
  <Heading
    as="h1"
    fontSize="24px"
    lineHeight="120%"
    fontWeight="600"
    letterSpacing="-0.05rem"
    textAlign="center"
  >
    {children}
  </Heading>
);

export default PageHeading;
