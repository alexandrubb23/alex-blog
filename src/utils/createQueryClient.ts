import { QueryClient } from '@tanstack/react-query';

let client: QueryClient | undefined;

export const getQueryClient = () => {
  if (!client) {
    client = new QueryClient();
  }

  return client;
};
