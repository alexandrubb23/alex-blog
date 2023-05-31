import React from 'react';

import { Entity, QueryParams } from '@/app/api/lib/models';

export interface QueryHookDataType {
  entity: Entity;
  params: QueryParams;
}

const QueryHookContext = React.createContext<QueryHookDataType>(
  {} as QueryHookDataType
);

export default QueryHookContext;
