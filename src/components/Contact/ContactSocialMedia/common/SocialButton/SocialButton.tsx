import { IconButton } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

export type SocialButtonVariant = 'blue' | 'nav-bar';

interface SocialButtonProps {
  icon: IconType;
  label: string;
  onClick: () => void;
  variant?: SocialButtonVariant;
}

const SocialButton = ({
  label,
  icon: Icon,
  onClick,
  variant,
}: SocialButtonProps) => (
  <IconButton
    aria-label={label}
    variant={variant}
    icon={<Icon size='20px' />}
    onClick={onClick}
  />
);

export default SocialButton;
