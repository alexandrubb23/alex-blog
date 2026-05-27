import { Box, Flex, Heading } from "@chakra-ui/react";

const CertificationsHeading = () => (
  <Flex
    direction={{ base: "column", md: "row" }}
    justify="space-between"
    align={{ base: "flex-start", md: "flex-end" }}
    gap={4}
    mt={{ base: 8, md: 14 }}
    mb={{ base: 2, md: 4 }}
  >
    <Box flex="1" minW={0}>
      <Box
        fontFamily="mono"
        fontSize="11px"
        fontWeight="500"
        letterSpacing="0.32em"
        textTransform="uppercase"
        color="iris"
        mb={3}
      >
        ── ./credentials · verified
      </Box>
      <Heading
        as="h1"
        fontFamily="display"
        fontSize={{ base: "32px", sm: "38px", md: "48px", lg: "56px" }}
        fontWeight="700"
        letterSpacing="-0.025em"
        lineHeight="1.05"
        color="bone"
        textTransform="uppercase"
        m={0}
      >
        My{" "}
        <Box
          as="span"
          color="iris"
          textShadow={{
            base: "none",
            _dark:
              "0 0 24px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)",
          }}
        >
          Certifications
        </Box>
      </Heading>
      <Box
        fontFamily="body"
        fontSize={{ base: "15px", md: "17px" }}
        lineHeight="1.7"
        color="ash"
        maxW="660px"
        mt={4}
      >
        Verified credentials across Docker, Git, React, Node.js, Python,
        JavaScript, TypeScript, MySQL, and Java — demonstrating a commitment to
        professional growth and staying current with industry standards.
      </Box>
    </Box>
  </Flex>
);

export default CertificationsHeading;
