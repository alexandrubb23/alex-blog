import { notFound } from "next/navigation";

import type { PropsWithChildren } from "react";

import { CenteredSpinner, ErrorAlert } from "@/components/common";
import { useItemQuery, useParseResponse } from "@/hooks";
import { PostProvider } from "./PostProvider";

const PageContent = ({ children }: PropsWithChildren) => {
  const { data, isLoading, error } = useItemQuery();
  const parsedResponse = useParseResponse(data);

  if (!data) notFound();

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading || !parsedResponse) return <CenteredSpinner />;

  return <PostProvider value={{ ...parsedResponse }}>{children}</PostProvider>;
};

export default PageContent;
