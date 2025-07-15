import { useMediaQuery } from "@chakra-ui/react";

const useIsNotMobile = () => {
  const [isNotMobile] = useMediaQuery(["(min-width: 515px)"]);

  return isNotMobile;
};

export default useIsNotMobile;
