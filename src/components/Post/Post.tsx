"use client";

import { VStack } from "@chakra-ui/react";

import Container from "@/components/Layout/Container";
import { useCodeHighlighting } from "@/hooks";
import { PageContent } from "../common";
import { AnimationScroll } from "../common/Animations/AnimationScroll";
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
          <AnimationScroll offset={0} w="100%">
            <PageHeader />
            <PageSubHeader />
          </AnimationScroll>
          <PageBody />
        </VStack>
      </Container>
      <MoreFromEntity limit={NUMBER_OF_MORE_POSTS} />
    </PageContent>
  );
};

export default Post;
