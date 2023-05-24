import React from 'react';
import {
  QueryObserverSuccessResult,
  UseQueryResult,
} from '@tanstack/react-query';

import { QueryParams } from '@/hooks/useEntitySlug';
import { FetchResponse } from '@/services';

export interface QueryHookDataProvider {
  params: QueryParams;
  queryHook: (params: QueryParams) => UseQueryResult<FetchResponse, Error>;
}

const QueryHookContextProvider = React.createContext<QueryHookDataProvider>({
  params: {
    id: '',
    topic: '',
  },
  queryHook: (params: QueryParams) => {
    return {
      data: {
        content: 'Sample content',
        date: '2023-05-23',
        id: '123',
        title: 'Sample title',
        topic: 'Sample topic',
      },
      error: null,
      isLoading: false,
    } as QueryObserverSuccessResult<FetchResponse, Error>;
  },
});

export default QueryHookContextProvider;
