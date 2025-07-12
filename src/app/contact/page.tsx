"use client";

import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

import { ContactForm, ContactInfo } from "@/components/Contact";
import { DoubleSeparator } from "@/components/common/DoubleSeparator";
import { Layout } from "@/components/Layout";
import { SocialMedia } from "@/components/SocialMedia";
import Container from "@/components/Layout/Container";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Box textAlign="center" mt="10px">
          <Heading as="h1" fontSize="34px" fontWeight="700">
            Get in touch
          </Heading>
          <Text mt={4}>
            Feel free to get in touch with me, and I'll be happy to assist you.
          </Text>
        </Box>
        <DoubleSeparator />
        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={10}>
          <GridItem>
            <VStack className="contact-info" gap="24px" alignItems="flex-start">
              <ContactInfo />
              <SocialMedia />
            </VStack>
          </GridItem>
          <GridItem>
            <ContactForm />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
