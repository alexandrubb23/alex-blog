import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { notFound } from "next/navigation";

import { ENTITIES } from "@/app/api/lib/constants";
import type { Technology } from "@/app/api/lib/models";
import { MoreEntities } from "@/components/Entities/MoreEntities";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import Container from "@/components/Layout/Container";
import { CenteredSpinner, ErrorAlert } from "@/components/common";
import {
  useCodeHighlighting,
  useEntityQuery,
  useItemQuery,
  useParseResponse,
} from "@/hooks";
import { formatReadingTime } from "@/utils/formatReadingTime";
import PageBody from "./PageBody";
import PageHeader from "./PageHeader";
import PageSubHeader from "./PageSubHeader";
import MoreFromEntity from "./MoreFromEntity";

const NUMBER_OF_MORE_POSTS = "2";

const PageContent = () => {
  useCodeHighlighting();

  const { data, isLoading, error } = useItemQuery();
  const parsedResponse = useParseResponse(data);

  if (!data) notFound();

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading || !parsedResponse) return <CenteredSpinner />;

  const { id, title, date, content, topic } = parsedResponse;
  const readingTime = formatReadingTime(content, id);

  return (
    <>
      <Container>
        <VStack gap={5} alignItems="flex-start">
          <PageHeader>{title}</PageHeader>
          <PageSubHeader readingTime={readingTime} date={date} />
          <PageBody>{content}</PageBody>
        </VStack>
      </Container>
      {/* TODO: Topic */}
      <MoreFromEntity
        excludePost={id}
        limit={NUMBER_OF_MORE_POSTS}
        topic={topic as Technology}
      />
    </>
  );
};
// http://localhost:3000/api/posts?excludePost=project-structure-analysis-with-ai-insights-alex-blog&limit=aaa2&topic=React
export default PageContent;
