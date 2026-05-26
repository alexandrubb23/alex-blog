import { Box } from "@chakra-ui/react";

import { ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import { useNavigateToPage } from "@/hooks/router";

const AboutAuthor = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <Box maxW="560px">
      <Box
        fontFamily="mono"
        fontSize="10px"
        fontWeight="500"
        letterSpacing="0.32em"
        textTransform="uppercase"
        color="ashMuted"
        mb={3}
      >
        // about
      </Box>
      <Box
        as="p"
        fontFamily="body"
        fontSize={{ base: "16px", md: "18px" }}
        lineHeight="1.65"
        color="bone"
        letterSpacing="0.005em"
        mb={5}
      >
        Engineer behind systems that businesses{" "}
        <Box as="span" color="iris" fontWeight="600">
          trust
        </Box>{" "}
        and{" "}
        <Box as="span" color="iris" fontWeight="600">
          scale
        </Box>{" "}
        with confidence — distributed services, calm interfaces, and the
        infrastructure that keeps them quiet.
      </Box>
      <SolidAnimatedButton onClick={() => navigateToPage(ROUTES.ABOUT_AUTHOR)}>
        Read briefing
      </SolidAnimatedButton>
    </Box>
  );
};

export default AboutAuthor;
