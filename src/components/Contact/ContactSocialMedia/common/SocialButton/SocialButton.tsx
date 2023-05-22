import { IconButton } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface SocialButtonProps {
  label: string;
  icon: IconType;
  onClick: () => void;
}

const SocialButton = ({ label, icon: Icon, onClick }: SocialButtonProps) => (
  <IconButton
    aria-label={label}
    variant='ghost'
    size='lg'
    isRound={true}
    _hover={{ bg: '#0D74FF' }}
    icon={<Icon size='28px' />}
    onClick={onClick}
  />
);

export default SocialButton;
