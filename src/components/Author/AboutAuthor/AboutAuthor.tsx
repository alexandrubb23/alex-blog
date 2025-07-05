import { Box, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { ROUTES } from "@/app/constants";
import SolidButton from "@/components/Button/SolidButton";
import { useIsHomePage } from "@/hooks";

const AboutAuthor = () => {
  const router = useRouter();
  const isHomePage = useIsHomePage();

  if (!isHomePage) return null;

  return (
    <VStack>
      <Heading as="h2" fontSize="24px" fontWeight={400}>
        I&apos;m a Software Engineer that companies love to hire.
      </Heading>
      <Box mt="24px">
        <SolidButton onClick={() => router.push(ROUTES.ABOUT_AUTHOR)}>
          Read about me
        </SolidButton>
      </Box>
    </VStack>
  );
};

export default AboutAuthor;
