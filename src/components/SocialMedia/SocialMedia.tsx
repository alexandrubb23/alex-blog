import socialMedia from "@/data/socialMedia";
import { HStack, IconButton } from "@chakra-ui/react";

const SocialMedia = () => {
  return (
    <HStack gap="40px">
      {socialMedia.map(({ name, icon: Icon, href }) => (
        <IconButton
          key={name}
          aria-label="Call support"
          rounded="full"
          _hover={{
            bg: "primary",
            color: "white",
          }}
          onClick={() => {
            window.open(href, "_blank");
          }}
        >
          <Icon />
        </IconButton>
      ))}
    </HStack>
  );
};

export default SocialMedia;
