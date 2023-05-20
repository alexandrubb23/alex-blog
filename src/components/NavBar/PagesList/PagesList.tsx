import { HamburgerMenu, HorizontalMenu } from '@/components/common';
import { Box, Spinner, useMediaQuery } from '@chakra-ui/react';
import { useLayoutEffect, useState } from 'react';
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

const PagesList = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [isLargeThan450] = useMediaQuery('(min-width: 450px)');

  useLayoutEffect(() => {
    if (showMenu) return;
    setShowMenu(true);
  }, [showMenu]);

  if (!showMenu) return <Box w='100%'>{<Spinner />}</Box>;

  const Menu = isLargeThan450 ? HorizontalMenu : HamburgerMenu;

  return <HamburgerMenu data={pages} />;
};

export default PagesList;
