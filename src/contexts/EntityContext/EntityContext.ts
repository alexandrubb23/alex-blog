import React from 'react';

import { Entity } from '@/app/api/lib/models';

export interface EntityContextType {
  entity: Entity;
}

const EntityContext = React.createContext<EntityContextType>(
  {} as EntityContextType
);

export default EntityContext;
