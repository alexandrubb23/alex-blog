import React from "react";
import { useFormContext } from "react-hook-form";

const useFormContextProvider = () => {
  const form = useFormContext();

  if (!form)
    throw new Error(
      "useFormContextProvider must be used within a FormProvider",
    );

  return form;
};

export default useFormContextProvider;
