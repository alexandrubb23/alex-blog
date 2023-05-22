import { useContactSocialMedia } from '@/hooks';
import { SocialButton } from './common';

const ContactSocialMedia = () => {
  const { data: socialMedia } = useContactSocialMedia();

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
