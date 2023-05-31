import EntityContext, {
  EntityContextType,
} from '@/contexts/EntityContext/EntityContext';

interface EntityProviderProps {
  children: React.ReactNode;
  value: EntityContextType;
}

const EntityProvider = ({ children, value }: EntityProviderProps) => {
  return (
    <EntityContext.Provider value={value}>{children}</EntityContext.Provider>
  );
};

export default EntityProvider;
