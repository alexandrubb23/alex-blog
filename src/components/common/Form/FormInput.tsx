import {
  InputProps as ChakraInputProps,
  Field,
  TextareaProps,
} from "@chakra-ui/react";
import { ChangeEvent, ElementType, PropsWithChildren } from "react";
import { ErrorMessage } from ".";
import useFormContextProvider from "./useFormContextProvider";

type Props = Partial<ChakraInputProps> | Partial<TextareaProps>;

export type FormInputProps = PropsWithChildren<{
  as: ElementType;
  label: string;
}> &
  Props;

export type InputProps = ChakraInputProps & Pick<FormInputProps, "label">;

const FormInput = ({
  label,
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
      <Field.Label
        fontSize={{
          base: "16px",
          md: "18px",
          lg: "20px",
          xl: "22px",
        }}
        fontWeight="500"
      >
        {label}
      </Field.Label>
      <Component
        borderWidth="1.5px"
        bg="white"
        border={border}
        padding="25px 16px"
        fontSize={{
          base: "16px",
          md: "18px",
          lg: "20px",
          xl: "22px",
        }}
        _focus={{
          focusRingColor: "primary",
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
