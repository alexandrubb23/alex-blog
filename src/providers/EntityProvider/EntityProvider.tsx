import EntityContext, {
  EntityContextType,
} from '@/contexts/EntityContext/EntityContext';

interface EntityProviderProps {
  children: React.ReactNode;
  data: EntityContextType;
}

const EntityProvider = ({ children, data }: EntityProviderProps) => {
  return (
    <EntityContext.Provider value={data}>{children}</EntityContext.Provider>
  );
};

export default EntityProvider;
