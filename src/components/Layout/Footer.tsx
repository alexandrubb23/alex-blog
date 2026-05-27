import { Box, Flex, GridItem, VStack } from "@chakra-ui/react";

import { LABEL_PREFIX, TypewriterLabel } from "@/components/common";
import {
  AuthorEmail,
  Copyright,
  GratefulFor,
  LetsWorkTogether,
} from "../Author/Footer";
import { SocialMedia } from "../SocialMedia";

const Footer = () => (
  <GridItem area="footer" color="bone" w="100%">
    <LetsWorkTogether />
    <Box
      bg="canvasDeep"
      color="ash"
      px={{ base: 5, md: 10 }}
      py={{ base: 12, md: 18 }}
      borderTop="1px solid"
      borderColor="rule"
      position="relative"
    >
      <Box maxW="container.lg" margin="auto">
        <VStack gap={{ base: 8, md: 10 }}>
          <GratefulFor />
          <SocialMedia enableStaggerDelay />
          <AuthorEmail />
          <Flex
            w="full"
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={3}
            pt={{ base: 6, md: 8 }}
            borderTop="1px dashed"
            borderColor="rule"
            fontFamily="mono"
            fontSize="10px"
            fontWeight="500"
            letterSpacing="0.24em"
            textTransform="uppercase"
            color="ashMuted"
          >
            <TypewriterLabel
              fontFamily="mono"
              fontSize="10px"
              fontWeight="500"
              letterSpacing="0.24em"
              textTransform="uppercase"
              color="ashMuted"
            >
              {`${LABEL_PREFIX} build · ibm plex · v4.7`}
            </TypewriterLabel>
            <Box>
              <Box as="span" color="signal" mr={2}>
                ●
              </Box>
              uptime 99.97
            </Box>
            <Copyright />
          </Flex>
        </VStack>
      </Box>
    </Box>
  </GridItem>
);

export default Footer;
