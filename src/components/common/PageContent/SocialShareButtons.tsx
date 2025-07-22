import { HStack } from "@chakra-ui/react";
import { FaLink, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import CopyToClipboardButton from "./CopyToClipboardButton";
import SocialShareButton from "./SocialShareButton";
import { type SocialMedia } from "./common/PostButton";
import useGetShareUrl from "./hooks/useGetShareUrl";

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
  },
  {
    id: "twitter",
    icon: FaSquareXTwitter,
    label: "Tweet",
    onClick: (url) =>
      window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank"),
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
  },
  {
    id: "copy",
    icon: FaLink,
    label: "Copy",
    isCopy: true,
  },
];

const SocialShareButtons = () => {
  const shareUrl = useGetShareUrl();

  const renderButton = (button: SocialMedia, shareUrl: string) => {
    const { icon: Icon, label, onClick, isCopy } = button;

    const ButtonComponent = isCopy ? CopyToClipboardButton : SocialShareButton;

    return (
      <ButtonComponent
        icon={Icon}
        key={button.id}
        label={label}
        onClick={onClick}
        shareUrl={shareUrl}
      />
    );
  };

  return (
    <HStack gap={2} hideBelow="md">
      {socialMedia.map((button) => renderButton(button, shareUrl))}
    </HStack>
  );
};

export default SocialShareButtons;
