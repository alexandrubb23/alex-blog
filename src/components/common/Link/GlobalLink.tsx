import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { type PropsWithChildren } from "react";
const GlobalLink = ({
  children,
  href,
  ...restProps
}: PropsWithChildren<LinkProps & { href: string }>) => (
  <ChakraLink
    asChild
    {...restProps}
    _hover={{
      color: "primary",
      ...restProps._hover,
    }}
    outline="none"
    color={{ _dark: "gray.300" }}
  >
    <Link href={href}>{children}</Link>
  </ChakraLink>
);

export default GlobalLink;
