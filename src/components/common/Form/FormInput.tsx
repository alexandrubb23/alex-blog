import { Field, InputProps, TextareaProps } from "@chakra-ui/react";
import React, { ChangeEvent, PropsWithChildren } from "react";
import { ErrorMessage } from ".";
import useFormContextProvider from "./useFormContextProvider";

type Props = Partial<InputProps> | Partial<TextareaProps>;

type FormInputProps = PropsWithChildren<{
  as: React.ElementType;
}> &
  Props;

const FormInput = ({
  children,
  name,
  as: Component,
  ...restProps
}: FormInputProps) => {
  const form = useFormContextProvider();

  const border = form.formState.errors[name as string]
    ? "1px dotted red"
    : "gray.200";

  return (
    <>
      <Field.Label>{children}</Field.Label>
      <Component
        borderWidth="1.5px"
        bg="white"
        border={border}
        _focus={{
          focusRingColor: "primary",
          focusRingWidth: "1.5px",
          border: "none",
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          form.setValue(name as string, e.target.value, {
            shouldValidate: true,
          })
        }
        {...restProps}
      />
      <ErrorMessage name={name as string} />
    </>
  );
};

export default FormInput;
