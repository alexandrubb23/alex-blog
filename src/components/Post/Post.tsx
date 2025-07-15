"use client";

import { VStack } from "@chakra-ui/react";

import Container from "@/components/Layout/Container";
import { useCodeHighlighting } from "@/hooks";
import { PageContent } from "../common";
import MoreFromEntity from "../common/PageContent/MoreFromEntity";
import PageBody from "../common/PageContent/PageBody";
import PageHeader from "../common/PageContent/PageHeader";
import PageSubHeader from "../common/PageContent/PageSubHeader";

const NUMBER_OF_MORE_POSTS = 2;

const Post = () => {
  useCodeHighlighting();

  return (
    <PageContent>
      <Container>
        <VStack gap={5} alignItems="flex-start">
          <PageHeader />
          <PageSubHeader />
          <PageBody />
        </VStack>
      </Container>
      <MoreFromEntity limit={NUMBER_OF_MORE_POSTS} />
    </PageContent>
  );
};

export default Post;
