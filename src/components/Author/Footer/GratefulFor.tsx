import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
import { Heading } from "@chakra-ui/react";

const GratefulFor = () => (
  <AnimationScroll offset={0} delay={0.5}>
    <Heading
      as="h4"
      fontSize="36px"
      fontWeight="400"
      color="white"
      fontFamily="nothingYouCouldDo"
    >
      Thank You!
    </Heading>
  </AnimationScroll>
);

export default GratefulFor;
