import { useClipboard } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import PostButton, { type SocialButtonProps } from "./common/PostButton";

const CopyToClipboardButton = ({
  icon: Icon,
  label,
  shareUrl,
}: Omit<SocialButtonProps, "onClick">) => {
  const clipboard = useClipboard({ value: shareUrl });
  const feedbackIcon = clipboard.copied ? <FaCheck color="green" /> : <Icon />;

  return (
    <PostButton onClick={clipboard.copy}>
      {feedbackIcon}
      {label}
    </PostButton>
  );
};

export default CopyToClipboardButton;
