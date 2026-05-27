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

  const hasError = form.formState.errors[name as string];

  return (
    <>
      <Field.Label
        fontFamily="mono"
        fontSize="11px"
        fontWeight="500"
        letterSpacing="0.22em"
        textTransform="uppercase"
        color="ashMuted"
        mb={1}
      >
        {label}
      </Field.Label>
      <Component
        borderWidth="1px"
        bg="elevated"
        borderColor={hasError ? "red.500" : "rule"}
        borderStyle={hasError ? "dashed" : "solid"}
        padding="14px 16px"
        fontSize={{ base: "14px", md: "15px" }}
        fontFamily="body"
        color="bone"
        _placeholder={{ color: "ashMuted" }}
        _focus={{
          focusRingColor: "iris",
          borderColor: "iris",
        }}
        transition="border-color 0.2s ease"
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
