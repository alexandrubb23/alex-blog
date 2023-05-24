import { IconButton, HStack, Switch, Text } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useColorMode } from '@/hooks';

const ColorModeSwitch = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={`switch to ${isDark ? 'light' : 'dark'} mode`}
      
      icon={isDark ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      variant="nav-bar"
    />
  );
};

export default ColorModeSwitch;
