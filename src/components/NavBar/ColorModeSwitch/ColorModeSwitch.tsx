import { HStack, Switch, Text } from '@chakra-ui/react';

import { useColorMode } from '@/hooks';

const ColorModeSwitch = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={isDark}
        onChange={toggleColorMode}
      />
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
