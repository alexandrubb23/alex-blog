import { VStack } from "@chakra-ui/react";
import { notFound } from "next/navigation";

import { CenteredSpinner, ErrorAlert } from "@/components/common";
import { useCodeHighlighting, useItemQuery, useParseResponse } from "@/hooks";
import { formatReadingTime } from "@/utils/formatReadingTime";
import { PostMeta } from "../PostMeta";
import PageBody from "./PageBody";
import PageHeader from "./PageHeader";
import PageSubHeader from "./PageSubHeader";

const PageContent = () => {
  useCodeHighlighting();

  const { data, isLoading, error } = useItemQuery();
  const parsedResponse = useParseResponse(data);

  if (!data) notFound();

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading || !parsedResponse) return <CenteredSpinner />;

  const { id, title, date, content } = parsedResponse;
  const readingTime = formatReadingTime(content, id);

  return (
    <VStack gap={5} alignItems="flex-start">
      <PageHeader>{title}</PageHeader>
      <PageSubHeader readingTime={readingTime} date={date} />
      <PageBody>{content}</PageBody>
    </VStack>
  );
};

export default PageContent;
