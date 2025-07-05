import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import theme from "@/theme";
import "@fontsource/libre-baskerville/700.css"; // Importing the font
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
