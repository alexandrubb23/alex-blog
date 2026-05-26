import { Box } from "@chakra-ui/react";

import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";

const GratefulFor = () => (
  <AnimationScroll offset={0} delay={0.5}>
    <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
      <Box
        fontFamily="mono"
        fontSize="11px"
        fontWeight="500"
        letterSpacing="0.32em"
        textTransform="uppercase"
        color="iris"
      >
        // end_of_transmission
      </Box>
      <Box
        as="h4"
        fontFamily="display"
        fontSize={{ base: "36px", md: "56px" }}
        fontWeight="700"
        color="bone"
        textTransform="uppercase"
        letterSpacing="-0.025em"
        lineHeight="1"
        m={0}
      >
        Thank&nbsp;you
        <Box as="span" color="iris">
          .
        </Box>
      </Box>
    </Box>
  </AnimationScroll>
);

export default GratefulFor;
