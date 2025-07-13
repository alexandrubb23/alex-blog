import z from "zod";
import { PropsWithChildren } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { toaster } from "@/components/ui/toaster";
import useForceRender from "@/hooks/useForceRender";

type FormData = z.infer<z.ZodType<unknown, unknown, any>>;

interface FormProps<T = FormData> {
  defaultValues?: T;
  duration?: number;
  onSubmit: (data: T) => void | Promise<void>;
  validationSchema: z.ZodType<T, unknown, any>;
}
const Form = ({
  children,
  defaultValues,
  onSubmit,
  duration = 5000,
  validationSchema,
}: PropsWithChildren<FormProps>) => {
  const { resetKey, setResetKey } = useForceRender();

  const form = useForm({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const handleSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
      toaster.create({
        description: "Form submitted successfully!",
        type: "success",
        duration,
      });

      form.reset(defaultValues);
      setResetKey();
    } catch (error) {
      toaster.create({
        description: "An error occurred while submitting the form.",
        type: "error",
        duration,
      });
    }
  };

  return (
    <FormProvider key={resetKey} {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
