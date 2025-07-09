import "@/styles/prism-themes.css";

import { Layout } from "@/components/Layout";
import { PageContent } from "@/components/common";
import { AnimatedBox } from "../Layout";
import { BackToPreviousLocationLink } from "../Link/BackToPreviousLocationLink";
interface PageLayoutProps {
  className?: string;
}

const PageLayout = ({ className }: PageLayoutProps) => (
  <Layout contentClassName={className}>
    <AnimatedBox>
      <PageContent />
      {/* <BackToPreviousLocationLink /> */}
    </AnimatedBox>
  </Layout>
);

export default PageLayout;
