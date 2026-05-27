import { Box, Flex, VStack } from "@chakra-ui/react";

import { CornerTicks } from "@/components/common";
import { useContactInfo } from "@/hooks";

const ContactInfo = () => {
  const { data: contactInfo } = useContactInfo();

  return (
    <Box w="full">
      <Box
        fontFamily="mono"
        fontSize="10px"
        fontWeight="500"
        letterSpacing="0.32em"
        textTransform="uppercase"
        color="iris"
        mb={3}
      >
        // contact.info
      </Box>
      <Box
        position="relative"
        border="1px solid"
        borderColor="rule"
        bg="surface"
        px={{ base: 4, md: 6 }}
        py={{ base: 2, md: 3 }}
      >
        <CornerTicks />
        <VStack gap={0} align="stretch">
          {contactInfo?.map(({ icon: Icon, label }) => (
            <Flex
              key={label}
              align="center"
              gap={3}
              py="12px"
              borderBottom="1px dashed"
              borderColor="rule"
              _last={{ borderBottom: "none" }}
              fontFamily="mono"
              fontSize={{ base: "13px", md: "14px" }}
              color="bone"
              letterSpacing="0.02em"
            >
              <Box color="iris" flexShrink={0}>
                <Icon size={15} />
              </Box>
              <Box>{label}</Box>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ContactInfo;
