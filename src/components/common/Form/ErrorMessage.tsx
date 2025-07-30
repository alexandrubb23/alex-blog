import { Box } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

import useFormContextProvider from "./useFormContextProvider";

const ErrorMessage = ({ name }: { name: string }) => {
  const { formState } = useFormContextProvider();
  const error = formState.errors[name] as FieldError;

  return error ? (
    <Box
      color={{
        _dark: "red.700",
        _light: "red.500",
      }}
      fontSize="12px"
    >
      {error.message}
    </Box>
  ) : null;
};

export default ErrorMessage;
