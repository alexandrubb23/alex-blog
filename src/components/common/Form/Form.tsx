import z from "zod";
import { PropsWithChildren } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { toaster } from "@/components/ui/toaster";
import useForceRender from "@/hooks/useForceRender";
import { Entity } from "@/app/api/lib/models";
import type APIClient from "@/services/api-client";
import { factoryApiClient } from "@/services";

type HttpMethod = {
  [K in keyof APIClient<any>]: APIClient<any>[K] extends Function ? K : never;
}[keyof APIClient<any>];

type FormData = z.infer<z.ZodType<unknown, unknown, any>>;

interface FormProps<T = FormData> {
  action: Entity;
  defaultValues?: T;
  duration?: number;
  method: HttpMethod;
  validationSchema: z.ZodType<T, unknown, any>;
}
const Form = ({
  children,
  defaultValues,
  duration = 5000,
  validationSchema,
  method,
  action,
}: PropsWithChildren<FormProps>) => {
  const { resetKey, setResetKey } = useForceRender();

  const form = useForm({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const handleSubmit = async (data: FormData) => {
    try {
      const httpService = factoryApiClient(action);
      await httpService[method](data);

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
