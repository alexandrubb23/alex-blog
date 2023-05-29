import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';

import { QueryParams } from '@/hooks/router/useEntitySlug';
import { PostData } from '@/app/api/lib/models';

export interface QueryHookDataProvider {
  params: QueryParams;
  queryHook: (params: QueryParams) => UseQueryResult<PostData, Error>;
}

const QueryHookContext = React.createContext<QueryHookDataProvider>(
  {} as QueryHookDataProvider
);

export default QueryHookContext;
