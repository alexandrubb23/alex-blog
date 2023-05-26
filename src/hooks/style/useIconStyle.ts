import useColorMode from "./useColorMode";

const useIconStyle = () => {
  const { isDark } = useColorMode();

  return {
    bg: isDark ? 'midnightBlue.500' : 'blue.500',
    borderRadius: 'full',
    color: isDark ? 'blue.500' : 'white',
    padding: '10px',
  }
}

export default useIconStyle;