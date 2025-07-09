import useColorMode from "./useColorMode";

const useIconStyle = () => {
  const { isDark } = useColorMode();

  return {
    bg: isDark ? "{colors.primary}" : "{colors.primary}",
    borderRadius: "full",
    color: isDark ? "blue.500" : "white",
    padding: "10px",
    marginRight: "12px",
  };
};

export default useIconStyle;
