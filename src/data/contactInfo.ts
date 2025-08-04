import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

import { AUTHOR } from "@/app/constants";

const contactInfo = [
  {
    icon: MdPhone,
    label: AUTHOR.PHONE_NUMBER,
    iconColor: "primary",
  },
  {
    icon: MdEmail,
    label: AUTHOR.EMAIL_ADDRESS,
    iconColor: "primary",
  },
  {
    icon: MdLocationOn,
    label: `${AUTHOR.ADDRESS.CITY}, ${AUTHOR.ADDRESS.COUNTRY}`,
    iconColor: "primary",
  },
];

export default contactInfo;
