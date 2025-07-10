import { PropsWithChildren } from "react";

import "@/styles/prism-themes.css";

import { Layout } from "@/components/Layout";
import { PageContent } from "@/components/common";
import { AnimatedBox } from "../Layout";
interface PageLayoutProps {
  className?: string;
}

const PageLayout = ({
  className,
  children = <PageContent />,
}: PropsWithChildren<PageLayoutProps>) => (
  <Layout contentClassName={className}>
    <AnimatedBox>{children}</AnimatedBox>
  </Layout>
);

export default PageLayout;
