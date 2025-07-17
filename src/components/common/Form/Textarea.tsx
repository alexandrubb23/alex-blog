import { Textarea as ChakraTextarea, TextareaProps } from "@chakra-ui/react";

import FormInput from "./FormInput";

const Textarea = ({ children, placeholder, ...restProps }: TextareaProps) => (
  <FormInput
    as={ChakraTextarea}
    placeholder={placeholder}
    rows={6}
    {...restProps}
  >
    {children}
  </FormInput>
);

export default Textarea;
