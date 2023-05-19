import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Hydrate } from '@tanstack/react-query';

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate>{children}</Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
