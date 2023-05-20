'use client';

import { Layout } from '@/components/Layout';
import { IconLabel } from '@/components/common';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { BsDiscord, BsGithub, BsPerson } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import {
  MdEmail,
  MdFacebook,
  MdLocationOn,
  MdOutlineEmail,
  MdPhone,
} from 'react-icons/md';

export default function Contact() {
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
                Feel free to get in touch with me, and I'll be happy <br />
                to assist you.
              </Text>
              <Box py={5}>
                <VStack pl={0} spacing={4} alignItems='flex-start'>
                  <IconLabel
                    icon={MdPhone}
                    label='+40-735 538 558'
                    iconWrapperProps={{ color: '#1970F1' }}
                  />
                  <IconLabel
                    icon={MdEmail}
                    label='alex_bb23@yahoo.co.uk'
                    iconWrapperProps={{ color: '#1970F1' }}
                  />
                  <IconLabel
                    icon={MdLocationOn}
                    label='Bucharest, Romania'
                    iconWrapperProps={{ color: '#1970F1' }}
                  />
                </VStack>
              </Box>
              <HStack spacing={5} alignItems='flex-start'>
                <IconButton
                  aria-label='facebook'
                  variant='ghost'
                  size='lg'
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<IoLogoLinkedin size='28px' />}
                />
                <IconButton
                  aria-label='github'
                  variant='ghost'
                  size='lg'
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsGithub size='28px' />}
                />
                <IconButton
                  aria-label='discord'
                  variant='ghost'
                  size='lg'
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsDiscord size='28px' />}
                />
              </HStack>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box borderRadius='lg'>
              <Box>
                <VStack spacing={5}>
                  <FormControl id='name'>
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<BsPerson />}
                      />
                      <Input type='text' size='md' />
                    </InputGroup>
                  </FormControl>
                  <FormControl id='name'>
                    <FormLabel>Mail</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents='none'
                        children={<MdOutlineEmail />}
                      />
                      <Input type='text' size='md' />
                    </InputGroup>
                  </FormControl>
                  <FormControl id='name'>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder='message' />
                  </FormControl>
                  <FormControl id='name' float='right'>
                    <Button
                      variant='solid'
                      bg='#0D74FF'
                      color='white'
                      _hover={{}}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  );
}
