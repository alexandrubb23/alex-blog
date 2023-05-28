import {
  UseQueryResult
} from '@tanstack/react-query';
import React from 'react';

import { QueryParams } from '@/hooks/router/useEntitySlug';
import { FetchResponse } from '@/services';

export interface QueryHookDataProvider {
  params: QueryParams;
  queryHook: (params: QueryParams) => UseQueryResult<FetchResponse, Error>;
}

const QueryHookContext = React.createContext<QueryHookDataProvider>(
  {} as QueryHookDataProvider
);

export default QueryHookContext;
