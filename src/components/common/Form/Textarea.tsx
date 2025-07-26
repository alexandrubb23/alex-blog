import { Textarea as ChakraTextarea } from "@chakra-ui/react";

import FormInput, { InputProps } from "./FormInput";

const Textarea = ({ label, placeholder, ...restProps }: InputProps) => (
  <FormInput
    as={ChakraTextarea}
    placeholder={placeholder}
    rows={6}
    label={label}
    {...restProps}
  />
);

export default Textarea;
