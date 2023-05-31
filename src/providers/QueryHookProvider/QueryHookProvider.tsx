import {
  QueryHookContext,
  QueryHookDataType,
} from '@/contexts/QueryHookContext';

interface QueryHookProviderProps {
  children: React.ReactNode;
  value: QueryHookDataType;
}

const QueryHookProvider = ({ children, value }: QueryHookProviderProps) => {
  return (
    <QueryHookContext.Provider value={value}>
      {children}
    </QueryHookContext.Provider>
  );
};

export default QueryHookProvider;
