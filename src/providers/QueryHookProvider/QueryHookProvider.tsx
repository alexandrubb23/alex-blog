import {
  QueryHookContext,
  QueryHookDataType,
} from '@/contexts/QueryHookContext';

interface QueryHookProviderProps {
  children: React.ReactNode;
  data: QueryHookDataType;
}

const QueryHookProvider = ({ children, data }: QueryHookProviderProps) => {
  return (
    <QueryHookContext.Provider value={data}>
      {children}
    </QueryHookContext.Provider>
  );
};

export default QueryHookProvider;
