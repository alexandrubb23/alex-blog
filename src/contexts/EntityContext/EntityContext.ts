import React from 'react';
import { UseQueryResult } from '@tanstack/react-query';

import { APIResponse, Entity, QueryParams } from '@/app/api/lib/models';

export interface EntityContextType {
  entityType: Entity;
  queryHook: (params: QueryParams) => UseQueryResult<APIResponse[], Error>;
}

const EntityContext = React.createContext<EntityContextType>(
  {} as EntityContextType
);

export default EntityContext;
