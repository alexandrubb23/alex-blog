import QueryHookContextProvider, { QueryHookDataProvider } from "@/context/QueryHookContextProvider";

interface QueryHookProviderProps {
  children: React.ReactNode;
  query: QueryHookDataProvider;
}

const QueryHookProvider = ({ children, query }: QueryHookProviderProps) => {
  return (
    <QueryHookContextProvider.Provider value={query}>
      {children}
    </QueryHookContextProvider.Provider>
  );
};

export default QueryHookProvider;