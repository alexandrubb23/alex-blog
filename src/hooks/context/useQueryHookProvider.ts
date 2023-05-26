import React from 'react';

import { QueryHookContextProvider } from '@/context';

const useQueryHookProvider = () => React.useContext(QueryHookContextProvider);

export default useQueryHookProvider;
