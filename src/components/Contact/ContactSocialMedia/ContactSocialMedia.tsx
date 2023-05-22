import { IconButton } from '@chakra-ui/react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';

const ContactSocialMedia = () => {
  return (
    <>
      <IconButton
        aria-label='facebook'
        variant='ghost'
        size='lg'
        isRound={true}
        _hover={{ bg: '#0D74FF' }}
        icon={<IoLogoLinkedin size='28px' />}
      />
      <IconButton
        aria-label='github'
        variant='ghost'
        size='lg'
        isRound={true}
        _hover={{ bg: '#0D74FF' }}
        icon={<BsGithub size='28px' />}
      />
      <IconButton
        aria-label='discord'
        variant='ghost'
        size='lg'
        isRound={true}
        _hover={{ bg: '#0D74FF' }}
        icon={<BsDiscord size='28px' />}
      />
    </>
  );
};

export default ContactSocialMedia;
