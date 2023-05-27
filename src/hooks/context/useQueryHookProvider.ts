import React from 'react';

import { QueryHookContext } from '@/contexts';

const useQueryHookProvider = () => React.useContext(QueryHookContext);

export default useQueryHookProvider;
