/* eslint-disable react/no-children-prop */
'use client';

import {
  ContactForm,
  ContactInfo,
  ContactSocialMedia,
} from '@/components/Contact';
import { Layout } from '@/components/Layout';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Layout>
      <Flex mt={4}>
        <Wrap
          spacing={{
            base: 10,
            sm: 3,
            md: 5,
            lg: 10,
          }}
        >
          <WrapItem>
            <Box>
              <Heading as='h1'>Get in Touch</Heading>
              <Text mt={4} color='gray.500'>
                Feel free to get in touch with me, and I&apos;ll be happy <br />
                to assist you.
              </Text>
              <Box py={5}>
                <VStack pl={0} spacing={4} alignItems='flex-start'>
                  <ContactInfo />
                </VStack>
              </Box>
              <HStack spacing={1} alignItems='flex-start'>
                <ContactSocialMedia />
              </HStack>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box borderRadius='lg'>
              <Box>
                <VStack spacing={5}>
                  <ContactForm />
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  );
};

export default Contact;
