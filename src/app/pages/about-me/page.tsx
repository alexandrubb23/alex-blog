"use client";

import Providers from "@/app/providers";
import AboutMe from "@/components/Author/AboutAuthor/AboutMe";
import { PageLayout } from "@/components/common";

const Page = () => {
  return (
    <Providers>
      <PageLayout>
        <AboutMe />
      </PageLayout>
    </Providers>
  );
};

export default Page;
