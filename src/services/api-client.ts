import axios from 'axios';

import { Entity } from '@/app/api/lib/models';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
});

class APIClient<T> {
  constructor(private endpoint: string) {
    this.endpoint = endpoint;
  }

  private get = (path = '') => {
    path = path ? `/${path}` : '';

    return axiosInstance
      .get<T>(`${this.endpoint}${path}`)
      .then(response => response.data);
  };

  getAll = () => {
    return this.get();
  };

  findOne = (id: string) => {
    return this.get(id);
  };
}

const factoryEntity = <T>(entity: Entity) => new APIClient<T>(`/${entity}`);

export default factoryEntity;
