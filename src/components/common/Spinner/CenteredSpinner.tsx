import { Flex, Spinner } from "@chakra-ui/react";

interface CenteredSpinnerProps {
  offsetHeight?: number;
}

const CenteredSpinner = ({ offsetHeight = 0 }: CenteredSpinnerProps) => (
  <Flex
    alignItems="center"
    color="primary"
    height={`calc(100vh - ${offsetHeight}px)`}
    justifyContent="center"
  >
    <Spinner />
  </Flex>
);

export default CenteredSpinner;
