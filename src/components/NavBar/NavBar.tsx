import { HStack } from '@chakra-ui/react';

import { ColorModeSwitch } from './ColorModeSwitch';
import { PagesList } from './PagesList';

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <PagesList />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
