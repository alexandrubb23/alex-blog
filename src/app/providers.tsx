import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@fontsource/libre-baskerville/700.css";
import "@fontsource/nothing-you-could-do/400.css";

import { ColorModeProvider } from "@/components/ui/color-mode";
import theme from "@/theme";
import { getQueryClient } from "@/utils/createQueryClient";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <ChakraProvider value={theme}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Providers;
