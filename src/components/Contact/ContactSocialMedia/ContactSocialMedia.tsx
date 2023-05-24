import { useContactSocialMedia } from '@/hooks';
import { SocialButton, SocialButtonVariant } from './common/SocialButton';
interface ContactSocialMediaProps {
  variant?: SocialButtonVariant;
}

const ContactSocialMedia = ({ variant = 'blue' }: ContactSocialMediaProps) => {
  const { data: socialMedia } = useContactSocialMedia();

  return (
    <>
      {socialMedia.map(({ name, icon: Icon, href }) => (
        <SocialButton
          key={name}
          label={name}
          icon={Icon}
          onClick={() => window.open(href, '_blank')}
          variant={variant}
        />
      ))}
    </>
  );
};

export default ContactSocialMedia;
