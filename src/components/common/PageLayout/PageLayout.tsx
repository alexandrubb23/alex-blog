import { Box } from "@chakra-ui/react";

import "@/styles/prism-themes.css";

import { Layout } from "@/components/Layout";
import { PageContent } from "@/components/common";
import { BackToPreviousLocationLink } from "../Link/BackToPreviousLocationLink";
import { AnimatedBox } from "../Layout";
interface PageLayoutProps {
  className?: string;
}

const PageLayout = ({ className }: PageLayoutProps) => (
  <Layout contentClassName={className}>
    <AnimatedBox marginY={2}>
      <PageContent />
      <BackToPreviousLocationLink />
    </AnimatedBox>
  </Layout>
);

export default PageLayout;
