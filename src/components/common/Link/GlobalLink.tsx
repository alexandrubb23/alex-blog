import { useNavigationMenu, usePrefetchPost } from "@/hooks";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { type PropsWithChildren, useCallback } from "react";
import { Entity } from "@/app/api/lib/models";

// TODO: Move this color to the theme
const DARK_COLOR = "#B9A8FB";

interface GlobalLinkProps extends LinkProps {
  href: string;
  entity?: Entity;
  slug?: string;
}

const GlobalLink = ({
  children,
  href,
  entity,
  slug,
  ...restProps
}: PropsWithChildren<GlobalLinkProps>) => {
  const { isActiveItem } = useNavigationMenu();
  const prefetchPost = usePrefetchPost();

  const isActive = isActiveItem(href);

  const handleMouseEnter = useCallback(() => {
    if (entity && slug) {
      prefetchPost(entity, slug);
    }
  }, [entity, slug, prefetchPost]);

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
      onMouseEnter={handleMouseEnter}
      {...restProps}
    >
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
};

export default GlobalLink;
