import { Breadcrumb } from "@chakra-ui/react";
import { LuHome } from "react-icons/lu";

import icons from "@/data/icons";

const PageBreadcrumb = () => {
  const Icon = icons.TypeScript;
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List listStyleType="none">
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.Link href="#">
            <LuHome />
            Home
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.Link href="#">
            <Icon />
            TypeScript
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item fontSize="16px" fontWeight="600">
          <Breadcrumb.CurrentLink color="gray.500">
            Reveal the Power of Discriminated Types
          </Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
};

export default PageBreadcrumb;
