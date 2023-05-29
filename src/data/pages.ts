import { ROUTES } from '@/app/constants';
import {
  AiFillFilePdf,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';

const pages = [
  {
    id: ROUTES.HOME,
    title: 'Home',
    icon: AiOutlineHome,
  },
  {
    id: ROUTES.ABOUT_AUTHOR,
    title: 'About me',
    icon: AiOutlineUser,
  },
  {
    id: ROUTES.CERTIFICATIONS,
    title: 'Certifications',
    icon: AiFillFilePdf,
  },
  {
    id: ROUTES.CONTACT,
    title: 'Contact',
    icon: AiOutlinePhone,
  },
];

export default pages;
