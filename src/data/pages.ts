import {
  AiFillFilePdf,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';

const pages = [
  {
    id: '/',
    title: 'Home',
    icon: AiOutlineHome,
  },
  {
    id: 'pages/about-author',
    title: 'About me',
    icon: AiOutlineUser,
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: AiFillFilePdf,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: AiOutlinePhone,
  },
];

export default pages;