import { useColorMode as useChakraColorMode } from '@chakra-ui/react';

const useColorMode = () => {
  const { colorMode, toggleColorMode } = useChakraColorMode();

  const isDark = colorMode === 'dark';

  return { colorMode, isDark, toggleColorMode };
};

export default useColorMode;
