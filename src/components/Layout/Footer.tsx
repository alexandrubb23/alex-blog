import { GridItem, VStack } from "@chakra-ui/react";

import {
  AuthorEmail,
  Copyright,
  GratefulFor,
  LetsWorkTogether,
} from "../Author/Footer";
import { SocialMedia } from "../SocialMedia";

const Footer = () => (
  <GridItem area="footer" color="white" textAlign="center" w="100%">
    <LetsWorkTogether />
    <VStack
      gap="40px"
      bg="black"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 20 }}
    >
      <GratefulFor />
      <SocialMedia />
      <AuthorEmail />
      <Copyright />
    </VStack>
  </GridItem>
);

export default Footer;
