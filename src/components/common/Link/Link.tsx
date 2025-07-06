import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

import { HTTP_QUERY_KEYS } from "@/app/constants";
import { Box, BoxProps } from "@chakra-ui/react";

interface LinkProps {
  children: string;
  href: string;
}

const Link = ({ children, href, ...props }: LinkProps & BoxProps) => {
  const currentPagePath = usePathname();

  const linkProps: UrlObject = {
    pathname: href,
    query:
      currentPagePath && currentPagePath !== "/"
        ? { [HTTP_QUERY_KEYS.PAGE_SOURCE]: currentPagePath.replace(/^\//g, "") }
        : undefined,
  };

  return (
    <Box {...props}>
      <NextLink href={linkProps}>{children}</NextLink>
    </Box>
  );
};

export default Link;
