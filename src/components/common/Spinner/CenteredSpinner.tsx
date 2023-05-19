import { Flex, Spinner } from '@chakra-ui/react';

interface CenteredSpinnerProps {
  offsetHeight?: number;
}

const CenteredSpinner = ({ offsetHeight = 0 }: CenteredSpinnerProps) => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      height={`calc(100vh - ${offsetHeight}px)`}
    >
      <Spinner />
    </Flex>
  );
};

export default CenteredSpinner;
