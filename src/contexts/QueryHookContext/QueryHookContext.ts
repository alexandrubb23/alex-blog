import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';

import { PostData, QueryParams } from '@/app/api/lib/models';

export interface QueryHookDataType {
  params: QueryParams;
  queryHook: (params: QueryParams) => UseQueryResult<PostData, Error>;
}

const QueryHookContext = React.createContext<QueryHookDataType>(
  {} as QueryHookDataType
);

export default QueryHookContext;
