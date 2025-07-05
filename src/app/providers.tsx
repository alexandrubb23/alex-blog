import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@fontsource/libre-baskerville/700.css";
import "@fontsource/nothing-you-could-do/400.css";

import theme from "@/theme";
import { getQueryClient } from "@/utils/createQueryClient";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ChakraProvider value={theme}>
      <QueryClientProvider client={getQueryClient()}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default Providers;
