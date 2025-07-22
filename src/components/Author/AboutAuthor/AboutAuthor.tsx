import { Box, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";

const AboutAuthor = () => {
  const router = useRouter();

  const handleReadAboutMe = useCallback(() => {
    router.push(ROUTES.ABOUT_AUTHOR);
  }, [router]);

  return (
    <VStack textAlign="center">
      <Heading
        as="h2"
        fontSize={{
          smDown: "18px",
          sm: "20px",
          md: "22px",
          lg: "24px",
          xl: "26px",
        }}
        fontWeight={400}
      >
        I&apos;m a Software Engineer that companies love to hire.
      </Heading>
      <Box mt="24px">
        <SolidAnimatedButton onClick={handleReadAboutMe}>
          Read about me
        </SolidAnimatedButton>
      </Box>
    </VStack>
  );
};

export default AboutAuthor;
