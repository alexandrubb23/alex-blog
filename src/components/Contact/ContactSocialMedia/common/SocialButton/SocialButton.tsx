import { IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

export type SocialButtonVariant = "blue" | "nav-bar";

interface SocialButtonProps {
  icon: IconType;
  label: string;
  onClick: () => void;
  variant?: SocialButtonVariant;
}

const SocialButton = ({ label, icon: Icon, onClick }: SocialButtonProps) => (
  <IconButton aria-label={label} onClick={onClick}>
    <Icon size="20px" /> {label}
  </IconButton>
);

export default SocialButton;
