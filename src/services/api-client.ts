import axios from 'axios';

import { env } from '@/env';

const axiosInstance = axios.create({
  baseURL: `${env.NEXT_PUBLIC_BASE_URL}/api`,
});

export class APIClient<T> {
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

export default APIClient;
