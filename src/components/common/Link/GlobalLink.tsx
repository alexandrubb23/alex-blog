import { useNavigationMenu } from "@/hooks";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { type PropsWithChildren } from "react";

// TODO: Move this color to the theme
const DARK_COLOR = "#B9A8FB";
const GlobalLink = ({
  children,
  href,
  ...restProps
}: PropsWithChildren<LinkProps & { href: string }>) => {
  const { isActiveItem } = useNavigationMenu();

  const isActive = isActiveItem(href);

  return (
    <ChakraLink
      asChild
      _hover={{
        color: { base: "primary", _dark: DARK_COLOR },
        ...restProps._hover,
      }}
      outline="none"
      color={{ _dark: isActive ? DARK_COLOR : "gray.200" }}
      textDecoration={isActive ? "line-through" : "none"}
      {...restProps}
    >
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
};

export default GlobalLink;
