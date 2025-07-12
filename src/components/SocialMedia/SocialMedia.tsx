import { HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <HStack gap="40px">
      <IconButton
        aria-label="Call support"
        rounded="full"
        _hover={{
          bg: "primary",
          color: "white",
        }}
      >
        <FaLinkedinIn />
      </IconButton>
      <IconButton
        aria-label="Call support"
        rounded="full"
        _hover={{
          bg: "primary",
          color: "white",
        }}
      >
        <FaGithub />
      </IconButton>
      <IconButton
        aria-label="Call support"
        rounded="full"
        _hover={{
          bg: "primary",
          color: "white",
        }}
      >
        <FaXTwitter />
      </IconButton>
      <IconButton
        aria-label="Call support"
        rounded="full"
        _hover={{
          bg: "primary",
          color: "white",
        }}
      >
        <FaFacebook />
      </IconButton>
    </HStack>
  );
};

export default SocialMedia;
