import { Alert } from "@chakra-ui/react";

const ErrorAlert = ({ error }: { error: string }) => (
  <Alert.Root status="error">
    <Alert.Indicator />
    <Alert.Title>{error}</Alert.Title>
  </Alert.Root>
);

export default ErrorAlert;
