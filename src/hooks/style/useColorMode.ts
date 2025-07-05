import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode as useChakraColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"

const useColorMode = () => {
  const { colorMode, toggleColorMode } = useChakraColorMode();

  const isDark = colorMode === 'dark';

  return { colorMode, isDark, toggleColorMode };
};

export default useColorMode;
