"use client";

import { Container, VStack } from "@chakra-ui/react";
import { PageContent } from "../common";
import PageBody from "../common/PageContent/PageBody";
import PageHeader from "../common/PageContent/PageHeader";
import PageSubHeader from "../common/PageContent/PageSubHeader";

const Certificate = () => (
  <PageContent>
    <Container>
      <VStack gap={5} alignItems="flex-start">
        <PageHeader />
        <PageSubHeader />
        <PageBody />
      </VStack>
    </Container>
  </PageContent>
);

export default Certificate;
