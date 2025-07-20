import PostButton, { type SocialButtonProps } from "./common/PostButton";

const SocialShareButton = ({
  icon: Icon,
  label,
  onClick,
  shareUrl,
}: SocialButtonProps) => {
  return (
    <PostButton aria-label={label} onClick={() => onClick?.(shareUrl)}>
      <Icon />
      {label}
    </PostButton>
  );
};

export default SocialShareButton;
