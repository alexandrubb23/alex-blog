import { Flex, FlexProps, Spinner } from "@chakra-ui/react";

interface CenteredSpinnerProps {
  offsetHeight?: number;
}

const CenteredSpinner = ({
  offsetHeight = 0,
  ...rest
}: CenteredSpinnerProps & FlexProps) => (
  <Flex
    alignItems="center"
    color="primary"
    height={`calc(100vh - ${offsetHeight}px)`}
    justifyContent="center"
    {...rest}
  >
    <Spinner />
  </Flex>
);

export default CenteredSpinner;
