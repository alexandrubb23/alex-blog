import { Box, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { ROUTES } from "@/app/constants";
import SolidButton from "@/components/Button/SolidButton";

const AboutAuthor = () => {
  const router = useRouter();

  const handleReadAboutMe = useCallback(() => {
    router.push(ROUTES.ABOUT_AUTHOR);
  }, [router]);

  return (
    <VStack>
      <Heading as="h2" fontSize="24px" fontWeight={400}>
        I&apos;m a Software Engineer that companies love to hire.
      </Heading>
      <Box mt="24px">
        <SolidButton onClick={handleReadAboutMe}>Read about me</SolidButton>
      </Box>
    </VStack>
  );
};

export default AboutAuthor;
