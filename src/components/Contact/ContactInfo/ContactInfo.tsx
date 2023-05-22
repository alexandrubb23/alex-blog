import { IconLabel } from '@/components/common';
import { useContactInfo } from '@/hooks';

const ContactInfo = () => {
  const { data: contactInfo } = useContactInfo();

  return (
    <>
      {contactInfo?.map(({ icon: Icon, label, iconColor }) => (
        <IconLabel
          key={label}
          icon={Icon}
          label={label}
          iconWrapperProps={{ color: iconColor }}
        />
      ))}
    </>
  );
};

export default ContactInfo;
