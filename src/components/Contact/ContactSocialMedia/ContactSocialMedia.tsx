import { useCallback } from "react";
import { useContactSocialMedia } from "@/hooks";
import { SocialButton, SocialButtonVariant } from "./common/SocialButton";

interface ContactSocialMediaProps {
  variant?: SocialButtonVariant;
}

const ContactSocialMedia = ({ variant = "blue" }: ContactSocialMediaProps) => {
  const { data: socialMedia } = useContactSocialMedia();

  const handleSocialClick = useCallback(
    (href: string) => () => {
      window.open(href, "_blank", "noopener,noreferrer");
    },
    [],
  );

  return (
    <>
      {socialMedia.map(({ name, icon: Icon, href }) => (
        <SocialButton
          key={name}
          label={name}
          icon={Icon}
          onClick={handleSocialClick(href)}
          variant={variant}
        />
      ))}
    </>
  );
};

export default ContactSocialMedia;
