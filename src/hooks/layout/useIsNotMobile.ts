import { useMediaQuery } from "@chakra-ui/react";

const MIN_WIDTH = 700; // Minimum width for non-mobile devices

const useIsNotMobile = () => {
  const [isNotMobile] = useMediaQuery([`(min-width: ${MIN_WIDTH}px)`]);

  return isNotMobile;
};

export default useIsNotMobile;
