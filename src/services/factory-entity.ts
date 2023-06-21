import { Entity } from '@/app/api/lib/models';
import { APIClient } from './api-client';

function factoryEntity<T>(entity: Entity): APIClient<T> {
  return new APIClient<T>(`/${entity}`);
}

export default factoryEntity;
