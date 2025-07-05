import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

import { HTTP_QUERY_KEYS } from "@/app/constants";

interface LinkProps {
  children: string;
  href: string;
}

const Link = ({ children, href }: LinkProps) => {
  const currentPagePath = usePathname();

  const linkProps: UrlObject = {
    pathname: href,
    query:
      currentPagePath && currentPagePath !== "/"
        ? { [HTTP_QUERY_KEYS.PAGE_SOURCE]: currentPagePath.replace(/^\//g, "") }
        : undefined,
  };

  return <NextLink href={linkProps}>{children}</NextLink>;
};

export default Link;
