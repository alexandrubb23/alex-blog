import { useMediaQuery } from '@chakra-ui/react';

const useIsNotMobile = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 450px)');

  return isNotMobile;
};

export default useIsNotMobile;
