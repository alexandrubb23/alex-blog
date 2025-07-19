import { env } from "@/env";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  HStack,
  useClipboard,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FaCheck, FaLink, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

type ButtonProps = Omit<SocialMedia, "button" | "id">;

type SocialMedia = {
  id: string;
  icon: React.ElementType;
  label: string;
  onClick?: (url: string) => void;
  button: ({ icon, label, onClick }: ButtonProps) => JSX.Element;
};

const PostButton = ({ children, ...rest }: ChakraButtonProps) => {
  return (
    <ChakraButton
      border="1.5px solid black"
      borderRadius="2rem"
      fontWeight="500"
      size="sm"
      variant="outline"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

const SocialShareButton = ({ icon: Icon, label, onClick }: ButtonProps) => {
  const pathname = usePathname();

  return (
    <PostButton
      onClick={() => onClick?.(`${env.NEXT_PUBLIC_BASE_URL}${pathname}`)}
    >
      <Icon />
      {label}
    </PostButton>
  );
};

const CopyToClipboardButton = ({ icon: Icon, label }: ButtonProps) => {
  const clipboard = useClipboard({
    value: `${env.NEXT_PUBLIC_BASE_URL}${usePathname()}`,
  });

  return (
    <PostButton onClick={clipboard.copy}>
      {!clipboard.copied ? <Icon /> : <FaCheck color="green" />}
      {label}
    </PostButton>
  );
};

const socialMedia: SocialMedia[] = [
  {
    id: "facebook",
    icon: FaFacebook,
    label: "Share",
    onClick: (url) =>
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank",
      ),
    button: SocialShareButton,
  },
  {
    id: "twitter",
    icon: FaSquareXTwitter,
    label: "Tweet",
    onClick: (url) =>
      window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank"),
    button: SocialShareButton,
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    label: "Share",
    onClick: (url) =>
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank",
      ),
    button: SocialShareButton,
  },
  {
    id: "copy",
    icon: FaLink,
    label: "Copy",
    button: CopyToClipboardButton,
  },
];

const PostSocialShare = () => (
  <HStack gap={2}>
    {socialMedia.map(({ id, icon: Icon, label, onClick, button: Button }) => (
      <Button key={id} icon={Icon} label={label} onClick={onClick} />
    ))}
  </HStack>
);

export default PostSocialShare;
