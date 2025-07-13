
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

import FormInput from "./FormInput";

const Input = ({ children, name, placeholder, ...restProps }: InputProps) => {
  return (
    <FormInput
      as={ChakraInput}
      name={name}
      placeholder={placeholder}
      {...restProps}
    >
      {children}
    </FormInput>
  );
};
export default Input;
