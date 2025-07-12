import {
  Box,
  GridItem,
  HStack,
  Heading,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { AUTHOR } from "@/app/constants";
import SolidAnimatedButton from "../Button/SolidAnimatedButton";
import { Separator } from "../Separator";

const Footer = () => (
  <GridItem area="footer" color="white" textAlign="center" w="100%">
    <Box bg="primary" px={{ base: 4, md: 10 }} py={{ base: 10, md: 20 }}>
      <Box maxW="container" margin="auto">
        <VStack gap="24px">
          <Heading as="h5" fontSize="26px" fontWeight="500">
            Got a project in mind? Let’s chat and turn your ideas into impactful
            solutions!
          </Heading>
          <Box>
            <SolidAnimatedButton visual="solidWhite">
              <Box as="span" mr={2} color="black">
                Let&apos;s work together
              </Box>
            </SolidAnimatedButton>
          </Box>
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
        <IconButton
          aria-label="Call support"
          rounded="full"
          _hover={{
            bg: "primary",
            color: "white",
          }}
        >
          <FaLinkedinIn />
        </IconButton>
        <IconButton
          aria-label="Call support"
          rounded="full"
          _hover={{
            bg: "primary",
            color: "white",
          }}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          aria-label="Call support"
          rounded="full"
          _hover={{
            bg: "primary",
            color: "white",
          }}
        >
          <FaXTwitter />
        </IconButton>
        <IconButton
          aria-label="Call support"
          rounded="full"
          _hover={{
            bg: "primary",
            color: "white",
          }}
        >
          <FaFacebook />
        </IconButton>
      </HStack>
      <Box fontSize="40px">
        {AUTHOR.EMAIL_ADDRESS}
        <Separator bg="white" height="5px" />
      </Box>
      <Heading as="h6" fontSize="16px">
        © {new Date().getFullYear()} {AUTHOR.NAME}. All rights reserved.
      </Heading>
    </VStack>
  </GridItem>
);

export default Footer;
