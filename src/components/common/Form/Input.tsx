import { Input as ChakraInput } from "@chakra-ui/react";

import FormInput, { type InputProps } from "./FormInput";

const Input = ({ label, name, placeholder, ...restProps }: InputProps) => (
  <FormInput
    as={ChakraInput}
    name={name}
    label={label}
    placeholder={placeholder}
    {...restProps}
  />
);

export default Input;
