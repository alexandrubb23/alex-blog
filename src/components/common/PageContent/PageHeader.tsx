import { VStack } from "@chakra-ui/react";

import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import PageBreadcrumb from "./PageBreadcrumb";
import PageHeading from "./PageHeading";

const PageHeader = ({ children }: { children: string }) => (
  <VStack margin="0 auto" gap="1rem">
    <TechnologyHeadingWithIcon technology="TypeScript" />
    <PageHeading>{children}</PageHeading>
    <PageBreadcrumb />
  </VStack>
);

export default PageHeader;
