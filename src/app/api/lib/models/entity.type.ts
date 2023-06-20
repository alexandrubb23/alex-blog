import { ENTITIES } from '@/app/api/lib/constants';

type Entity = (typeof ENTITIES)[keyof typeof ENTITIES];

export default Entity;

