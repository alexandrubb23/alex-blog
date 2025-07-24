import { Box, Breadcrumb } from "@chakra-ui/react";
import { LuHome } from "react-icons/lu";

import icons from "@/data/icons";
import { shrunkText } from "@/utils/str";
import Link from "next/link";
import { usePostContext } from "./PostProvider";

const PageBreadcrumb = () => {
  const { topic, title } = usePostContext();
  const Icon = icons[topic as keyof typeof icons];

  const shrunkedTitle = shrunkText(title);

  return (
    <Breadcrumb.Root>
      <Breadcrumb.List listStyleType="none">
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Link
            href="/"
            passHref
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <LuHome />
            <Box as="span" hideBelow="md">
              Home
            </Box>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.Link href="#">
            <Icon />
            <Box as="span" hideBelow="md">
              {topic}
            </Box>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.CurrentLink
            color="gray.500"
            fontSize={{
              base: "11px",
              sm: "16px",
            }}
            lineHeight={{
              base: "1.2",
            }}
          >
            {shrunkedTitle}
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};

export default PageBreadcrumb;
