import React from 'react';

import { QueryHookProvider } from '@/context';

const useQueryHookProvider = () => React.useContext(QueryHookProvider);

export default useQueryHookProvider;
