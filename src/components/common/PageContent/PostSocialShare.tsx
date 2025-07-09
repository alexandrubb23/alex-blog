import { Button, HStack } from "@chakra-ui/react";
import { FaLink, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

type SocialMedia = {
  id: string;
  icon: React.ElementType;
  label: string;
};

const socialMedia: SocialMedia[] = [
  { id: "facebook", icon: FaFacebook, label: "Share" },
  { id: "twitter", icon: FaSquareXTwitter, label: "Tweet" },
  { id: "linkedin", icon: FaLinkedin, label: "Share" },
  { id: "copy", icon: FaLink, label: "Copy" },
];

const PostSocialShare = () => (
  <HStack gap={2}>
    {socialMedia.map(({ id, icon: Icon, label }) => (
      <Button
        border="1.5px solid black"
        borderRadius="2rem"
        fontWeight="500"
        key={id}
        size="sm"
        variant="outline"
      >
        <Icon />
        {label}
      </Button>
    ))}
  </HStack>
);

export default PostSocialShare;
