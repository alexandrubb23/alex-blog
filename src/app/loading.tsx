"use client";

import { CenteredSpinner } from "@/components/common";
import Providers from "./providers";

const Loading = () => {
  return (
    <Providers>
      <CenteredSpinner />
    </Providers>
  );
};

export default Loading;
