import { BoxProps } from "@chakra-ui/react";
import useColorMode from "./useColorMode";

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
