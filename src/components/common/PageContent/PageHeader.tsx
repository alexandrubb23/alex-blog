import { VStack } from "@chakra-ui/react";

import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import PageBreadcrumb from "./PageBreadcrumb";
import PageHeading from "./PageHeading";
import { usePostContext } from "./PostProvider";

const PageHeader = () => {
  const { title } = usePostContext();

  return (
    <VStack margin="0 auto" gap="1rem">
      <TechnologyHeadingWithIcon technology="TypeScript" />
      <PageHeading>{title}</PageHeading>
      <PageBreadcrumb />
    </VStack>
  );
};

export default PageHeader;
