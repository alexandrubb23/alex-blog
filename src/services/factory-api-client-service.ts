import { APIResponse, Entity } from '@/app/api/lib/models';
import APIClient from './api-client';

const factoryEntity = (entity: Entity) =>
  new APIClient<APIResponse[]>(`/${entity}`);

export default factoryEntity;
