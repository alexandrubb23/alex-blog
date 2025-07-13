import { Box } from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";

const ErrorMessage = ({ name }: { name: string }) => {
  const { formState } = useFormContext();
  const error = formState.errors[name] as FieldError;

  return error ? (
    <Box color="red.500" fontSize="12px">
      {error.message}
    </Box>
  ) : null;
};

export default ErrorMessage;
