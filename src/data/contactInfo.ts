import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import { AUTHOR } from '@/app/constants';

const contactInfo = [
  {
    icon: MdPhone,
    label: AUTHOR.PHONE_NUMBER,
    iconColor: 'blue.500',
  },
  {
    icon: MdEmail,
    label: AUTHOR.EMAIL_ADDRESS,
    iconColor: 'blue.500',
  },
  {
    icon: MdLocationOn,
    label: `${AUTHOR.ADDRESS.CITY}, ${AUTHOR.ADDRESS.COUNTRY}`,
    iconColor: 'blue.500',
  },
];

export default contactInfo;
