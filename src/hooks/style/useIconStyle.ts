import { useColorMode } from "@/components/ui/color-mode";
import { BoxProps } from "@chakra-ui/react";

const useIconStyle = (props: BoxProps = {}) => {
  const { isDark } = useColorMode();

  return {
    bg: isDark ? "{colors.primary}" : "{colors.primary}",
    borderRadius: "full",
    color: isDark ? "white" : "white",
    padding: "10px",
    ...props,
  };
};

export default useIconStyle;
