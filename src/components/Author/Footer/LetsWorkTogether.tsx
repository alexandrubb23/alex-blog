import { Box, Flex, Heading, VStack } from "@chakra-ui/react";

import { ROUTES } from "@/app/constants";
import SolidAnimatedButton from "@/components/Button/SolidAnimatedButton";
import { LABEL_PREFIX, PulsateDot, TypewriterLabel } from "@/components/common";
import { AnimationScroll } from "@/components/common/Animations/AnimationScroll";
import { useNavigateToPage } from "@/hooks/router";

const LetsWorkTogether = () => {
  const navigateToPage = useNavigateToPage();
  return (
    <Box
      bg="graphite"
      color="bone"
      px={{ base: 5, md: 10 }}
      py={{ base: 16, md: 28 }}
      position="relative"
      overflow="hidden"
      borderTop="1px solid"
      borderColor="rule"
    >
      {/* faint grid texture */}
      <Box
        position="absolute"
        inset="0"
        opacity={0.4}
        pointerEvents="none"
        backgroundImage="linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)"
        backgroundSize="64px 64px"
      />
      {/* iris vignette (dark mode only) */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        opacity={{ base: 0, _dark: 1 }}
        backgroundImage="radial-gradient(circle at 50% 100%, rgba(139,92,246,0.18) 0%, transparent 55%)"
      />
      <Box maxW="container.lg" margin="auto" position="relative">
        <VStack gap={{ base: 8, md: 12 }} align="center" textAlign="center">
          <AnimationScroll offset={0}>
            <Flex
              align="center"
              justify="center"
              gap={3}
              fontFamily="mono"
              fontSize="11px"
              fontWeight="500"
              letterSpacing="0.32em"
              textTransform="uppercase"
              color="iris"
            >
              <TypewriterLabel>{`${LABEL_PREFIX} channel · open`}</TypewriterLabel>
              <PulsateDot />
            </Flex>
          </AnimationScroll>
          <AnimationScroll offset={0}>
            <Heading
              as="h2"
              fontFamily="display"
              fontWeight="700"
              fontSize={{ base: "32px", md: "60px", lg: "76px" }}
              lineHeight={{ base: "1.05", md: "0.95" }}
              letterSpacing="-0.03em"
              color="bone"
              textTransform="uppercase"
              maxW="980px"
              m={0}
            >
              Got a system in mind?{" "}
              <Box
                as="span"
                color="iris"
                textShadow={{
                  base: "none",
                  _dark:
                    "0 0 24px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.2)",
                }}
              >
                Let&apos;s build it.
              </Box>
            </Heading>
          </AnimationScroll>
          <AnimationScroll offset={0}>
            <Box mt={{ base: 2, md: 4 }}>
              <SolidAnimatedButton
                visual="solidPurple"
                onClick={() => {
                  navigateToPage(ROUTES.CONTACT);
                }}
              >
                Open channel
              </SolidAnimatedButton>
            </Box>
          </AnimationScroll>
        </VStack>
      </Box>
    </Box>
  );
};

export default LetsWorkTogether;
