import {
  QueryHookContext,
  QueryHookDataProvider,
} from '@/contexts/QueryHookContext';

interface QueryHookProviderProps {
  children: React.ReactNode;
  query: QueryHookDataProvider;
}

const QueryHookProvider = ({ children, query }: QueryHookProviderProps) => {
  return (
    <QueryHookContext.Provider value={query}>
      {children}
    </QueryHookContext.Provider>
  );
};

export default QueryHookProvider;
