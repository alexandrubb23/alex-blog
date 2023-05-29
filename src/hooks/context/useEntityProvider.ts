import React from 'react';

import { EntityContext } from '@/contexts';

const useEntityProvider = () => React.useContext(EntityContext);

export default useEntityProvider;
