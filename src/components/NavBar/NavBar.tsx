import { HStack } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding='10px' flexDirection='row-reverse'>
      {/* <SearchInput /> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
