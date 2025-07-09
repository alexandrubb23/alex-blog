import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { notFound } from "next/navigation";

import { CenteredSpinner, ErrorAlert } from "@/components/common";
import { useCodeHighlighting, useItemQuery, useParseResponse } from "@/hooks";
import { formatReadingTime } from "@/utils/formatReadingTime";
import PageBody from "./PageBody";
import PageHeader from "./PageHeader";
import PageSubHeader from "./PageSubHeader";
import { MoreEntities } from "@/components/Entities/MoreEntities";
import { TechnologyHeadingWithIcon } from "@/components/Entities/TechnologyHeadingWithIcon";
import Container from "@/components/Layout/Container";

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
      <Box bg="header">
        <Container>
          <Heading
            as="h2"
            borderBottom="1.5px solid black"
            fontSize="2rem"
            fontWeight="500"
            pb="1rem"
          >
            <TechnologyHeadingWithIcon
              label={`More from ${topic}`}
              technology={topic}
            />
          </Heading>
          <HStack mt="25px">
            <MoreEntities />
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default PageContent;
