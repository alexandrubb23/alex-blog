import { Breadcrumb } from "@chakra-ui/react";
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
    <Breadcrumb.Root hideBelow="md">
      <Breadcrumb.List listStyleType="none">
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Link
            href="/"
            passHref
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <LuHome />
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.Link href="#">
            <Icon />
            {topic}
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.CurrentLink color="gray.500">
            {shrunkedTitle}
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};

export default PageBreadcrumb;
