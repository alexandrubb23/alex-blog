import useColorMode from "./useColorMode";

const useIconStyle = () => {
  const { isDark } = useColorMode();

  return {
    bg: isDark ? "{colors.primary}" : "{colors.primary}",
    borderRadius: "full",
    color: isDark ? "blue.500" : "white",
    padding: "10px",
  };
};

export default useIconStyle;
