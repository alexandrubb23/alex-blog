import { Button, HStack, Switch, Text } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useColorMode } from '@/hooks';

const ColorModeSwitch = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <Button
      _hover={{
        bg: isDark ? 'gray.700' : 'gray.100',
      }}
      __css={{
        span: {
          margin: 0,
          display: 'inline',
        },
      }}
      borderRadius='5px'
      p='10px'
      m={0}
      rightIcon={isDark ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
