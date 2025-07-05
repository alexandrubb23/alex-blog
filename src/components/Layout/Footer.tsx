import {
  GridItem,
  Box,
  VStack,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { LuVoicemail } from "react-icons/lu";

import { AUTHOR } from "@/app/constants";
import SolidButton from "../Button/SolidButton";
import { Separator } from "../Separator";

const Footer = () => (
  <GridItem area="footer" color="white" textAlign="center" w="100%">
    <Box bg="primary" px={{ base: 4, md: 10 }} py={{ base: 10, md: 20 }}>
      <Box maxW="container" margin="auto">
        <VStack gap="24px">
          <Heading as="h3" fontSize="26px" fontWeight="500">
            Got a project in mind? Let’s chat and turn your ideas into impactful
            solutions!
          </Heading>
          <SolidButton visual="solidWhite">
            <Box as="span" mr={2} color="black">
              Let&apos;s work together
            </Box>
          </SolidButton>
        </VStack>
      </Box>
    </Box>
    <VStack
      gap="40px"
      bg="black"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 20 }}
    >
      <Heading
        as="h4"
        fontSize="36px"
        fontWeight="400"
        color="white"
        fontFamily="nothingYouCouldDo"
      >
        Thank You!
      </Heading>
      <HStack gap="40px">
        <IconButton aria-label="Call support" rounded="full">
          <LuVoicemail />
        </IconButton>
        <IconButton aria-label="Call support" rounded="full">
          <LuVoicemail />
        </IconButton>
        <IconButton aria-label="Call support" rounded="full">
          <LuVoicemail />
        </IconButton>
        <IconButton aria-label="Call support" rounded="full">
          <LuVoicemail />
        </IconButton>
      </HStack>
      <Box fontSize="40px">
        {AUTHOR.EMAIL_ADDRESS}
        <Separator bg="white" height="5px" />
      </Box>
      <Box>
        © {new Date().getFullYear()} {AUTHOR.NAME}. All rights reserved.
      </Box>
    </VStack>
  </GridItem>
);

export default Footer;
