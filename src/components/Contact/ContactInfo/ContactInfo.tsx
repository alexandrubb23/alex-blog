import { IconLabel } from '@/components/common';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <>
      <IconLabel
        icon={MdPhone}
        label='+40-735 538 558'
        iconWrapperProps={{ color: '#1970F1' }}
      />
      <IconLabel
        icon={MdEmail}
        label='alex_bb23@yahoo.co.uk'
        iconWrapperProps={{ color: '#1970F1' }}
      />
      <IconLabel
        icon={MdLocationOn}
        label='Bucharest, Romania'
        iconWrapperProps={{ color: '#1970F1' }}
      />
    </>
  );
};

export default ContactInfo;
