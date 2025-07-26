import { Box, Heading, VStack } from "@chakra-ui/react";

import { ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import { useNavigateToPage } from "@/hooks/router";

const AboutAuthor = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <VStack textAlign="center">
      <Heading
        as="h2"
        fontSize={{
          smDown: "20px",
          sm: "20px",
          lg: "24px",
        }}
        fontWeight={400}
      >
        I&apos;m a Software Engineer that companies love to hire.
      </Heading>
      <Box mt="24px">
        <SolidAnimatedButton
          onClick={() => navigateToPage(ROUTES.ABOUT_AUTHOR)}
        >
          Read about me
        </SolidAnimatedButton>
      </Box>
    </VStack>
  );
};

export default AboutAuthor;
