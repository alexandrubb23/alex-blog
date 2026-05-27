import { PropsWithChildren } from "react";

import { AUTHOR } from "@/app/constants";
import type { Metadata } from "next";

const title = `About Me | ${AUTHOR.NAME}`;

export const metadata: Metadata = {
  title,
  description: `Learn more about the author, ${AUTHOR.NAME}, and his journey in web development.`,
  openGraph: {
    title,
    images: `/images/${AUTHOR.AVATAR}`,
  },
};

const PageLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default PageLayout;
