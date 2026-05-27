"use client";

import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";

import { LABEL_PREFIX, TypewriterLabel } from "@/components/common";
import { DoubleSeparator } from "@/components/common/DoubleSeparator";
import { ContactForm, ContactInfo } from "@/components/Contact";
import { Layout } from "@/components/Layout";
import Container from "@/components/Layout/Container";
import { SocialMedia } from "@/components/SocialMedia";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Box mt={{ base: 8, md: 14 }} mb={{ base: 2, md: 4 }}>
          <Box
            fontFamily="mono"
            fontSize="11px"
            fontWeight="500"
            letterSpacing="0.32em"
            textTransform="uppercase"
            color="iris"
            mb={3}
          >
            ── ./channel · open
          </Box>
          <Heading
            as="h1"
            fontFamily="display"
            fontSize={{ base: "34px", sm: "42px", md: "52px", lg: "64px" }}
            fontWeight="700"
            letterSpacing="-0.025em"
            lineHeight="1.05"
            color="bone"
            textTransform="uppercase"
            m={0}
          >
            Get in{" "}
            <Box
              as="span"
              color="iris"
              textShadow={{
                base: "none",
                _dark:
                  "0 0 24px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)",
              }}
            >
              Touch.
            </Box>
          </Heading>
          <Box
            fontFamily="body"
            fontSize={{ base: "15px", md: "17px" }}
            lineHeight="1.7"
            color="ash"
            mt={3}
            maxW="480px"
          >
            Feel free to reach out — I&apos;ll be happy to assist you.
          </Box>
        </Box>

        <DoubleSeparator />

        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={10}>
          <GridItem>
            <VStack gap="32px" alignItems="flex-start">
              <ContactInfo />
              <Box>
                <TypewriterLabel
                  fontFamily="mono"
                  fontSize="10px"
                  fontWeight="500"
                  letterSpacing="0.32em"
                  textTransform="uppercase"
                  color="iris"
                  mb={4}
                >
                  {`${LABEL_PREFIX} social · links`}
                </TypewriterLabel>
                <SocialMedia />
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <TypewriterLabel
              fontFamily="mono"
              fontSize="10px"
              fontWeight="500"
              letterSpacing="0.32em"
              textTransform="uppercase"
              color="iris"
              mb={4}
            >
              {`${LABEL_PREFIX} send · transmission`}
            </TypewriterLabel>
            <ContactForm />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
