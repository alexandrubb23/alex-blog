import { BsGithub, BsTwitter } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';

import { SocialButton } from './common';

const socialMedia = [
  {
    name: 'linkedin',
    icon: IoLogoLinkedin,
    href: 'https://www.linkedin.com/in/barbulescu-alexandru-3b94a6121/',
  },
  {
    name: 'github',
    icon: BsGithub,
    href: 'https://github.com/alexandrubb23',
  },
  {
    name: 'twitter',
    icon: BsTwitter,
    href: 'https://twitter.com/alexandru_24',
  },
];

const ContactSocialMedia = () => {
  return (
    <>
      {socialMedia.map(({ name, icon: Icon, href }) => (
        <SocialButton
          key={name}
          label={name}
          icon={Icon}
          onClick={() => window.open(href, '_blank')}
        />
      ))}
    </>
  );
};

export default ContactSocialMedia;
