import { Box, Heading, VStack } from "@chakra-ui/react";

import { ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import { useNavigateToPage } from "@/hooks/router";

const LetsWorkTogether = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <Box bg="primary" px={{ base: 4, md: 10 }} py={{ base: 10, md: 20 }}>
      <Box maxW="container" margin="auto">
        <VStack gap="24px">
          <Heading
            as="h5"
            fontSize={{
              base: "1.25rem",
              sm: "1.25rem",
              lg: "26px",
            }}
            fontWeight="500"
          >
            Got a project in mind? Let’s chat and turn your ideas into impactful
            solutions!
          </Heading>
          <Box>
            <SolidAnimatedButton
              visual="solidWhite"
              onClick={() => {
                navigateToPage(ROUTES.CONTACT);
              }}
            >
              <Box as="span" color="black">
                Let&apos;s work together
              </Box>
            </SolidAnimatedButton>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default LetsWorkTogether;
