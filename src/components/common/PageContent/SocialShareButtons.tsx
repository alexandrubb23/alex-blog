import { HStack } from "@chakra-ui/react";
import { FaLink, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

import { AnimationScroll } from "../Animations/AnimationScroll";
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

  const renderButton = (
    button: SocialMedia,
    shareUrl: string,
    index: number,
  ) => {
    const { icon: Icon, label, onClick, isCopy } = button;

    const ButtonComponent = isCopy ? CopyToClipboardButton : SocialShareButton;

    return (
      <AnimationScroll
        animation="backInOut"
        delay={0.2}
        direction="down"
        display="flex"
        key={button.id}
        offset={(index + 1) * 7}
        width="100%"
      >
        <ButtonComponent
          icon={Icon}
          label={label}
          onClick={onClick}
          shareUrl={shareUrl}
        />
      </AnimationScroll>
    );
  };

  return (
    <HStack gap={2}>
      {socialMedia.map((button, index) =>
        renderButton(button, shareUrl, index),
      )}
    </HStack>
  );
};

export default SocialShareButtons;
