import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

const ErrorAlert = ({ error }: { error: string }) => (
  <Alert status='error'>
    <AlertIcon />
    <AlertTitle>{error}</AlertTitle>
  </Alert>
);

export default ErrorAlert;
