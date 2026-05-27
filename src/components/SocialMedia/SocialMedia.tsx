import socialMedia from "@/data/socialMedia";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { AnimationScroll } from "../common/Animations/AnimationScroll";

type SocialMediaProps = {
  enableStaggerDelay?: boolean;
};

const TOP = 40;

const SocialMedia = ({ enableStaggerDelay = false }: SocialMediaProps) => {
  return (
    <Flex gap={3} wrap="wrap">
      {socialMedia.map(({ name, icon: Icon, href }, index) => (
        <AnimationScroll
          animation="backInOut"
          delay={(index + 1) * 0.05}
          direction="down"
          display="flex"
          offset={TOP - index}
          key={name}
          wait={enableStaggerDelay ? 0.9 : 0}
        >
          <IconButton
            aria-label={name}
            border="1px solid"
            borderColor="rule"
            borderRadius="full"
            color="ash"
            bg="transparent"
            size="md"
            _hover={{
              bg: "irisGlow",
              borderColor: "iris",
              color: "iris",
            }}
            transition="all 0.2s ease"
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            <Icon />
          </IconButton>
          <Box
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="ashMuted"
            mt="4px"
            textAlign="center"
            display={{ base: "none", md: "block" }}
          >
            {name}
          </Box>
        </AnimationScroll>
      ))}
    </Flex>
  );
};

export default SocialMedia;
