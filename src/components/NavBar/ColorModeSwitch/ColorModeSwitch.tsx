import { IconButton } from "@chakra-ui/react";

import { useColorMode } from "@/hooks";

const ColorModeSwitch = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={`switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
