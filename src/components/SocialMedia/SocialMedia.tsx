import socialMedia from "@/data/socialMedia";
import { HStack, IconButton } from "@chakra-ui/react";
import { AnimationScroll } from "../common/Animations/AnimationScroll";

type SocialMediaProps = {
  enableStaggerDelay?: boolean;
};

const TOP = 40;

const SocialMedia = ({ enableStaggerDelay = false }: SocialMediaProps) => {
  return (
    <HStack gap="40px">
      {socialMedia.map(({ name, icon: Icon, href }, index) => (
        <AnimationScroll
          animation="backInOut"
          delay={(index + 1) * 0.05}
          direction="down"
          display="flex"
          offset={TOP - index}
          width="100%"
          key={name}
          wait={enableStaggerDelay ? 0.9 : 0}
        >
          <IconButton
            aria-label="Call support"
            rounded="full"
            _hover={{
              bg: "primary",
              color: "white",
            }}
            color={{
              _dark: "primary",
            }}
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            <Icon />
          </IconButton>
        </AnimationScroll>
      ))}
    </HStack>
  );
};

export default SocialMedia;
