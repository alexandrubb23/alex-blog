"use client";

import { ContactForm, ContactInfo } from "@/components/Contact";

import { Layout } from "@/components/Layout";
import Container from "@/components/Layout/Container";
import { SocialMedia } from "@/components/SocialMedia";
import { DoubleSeparator } from "@/components/common/DoubleSeparator";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <ContactForm />
          </GridItem>
          <GridItem>
            <VStack className="contact-info" gap="24px" alignItems="flex-start">
              <ContactInfo />
              <SocialMedia />
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
