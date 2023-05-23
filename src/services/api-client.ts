import axios from 'axios';

export interface FetchResponse {
  content: string;
  date: string;
  id: string;
  title: string;
  topic?: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

class APIClient<T> {
  constructor(private endpoint: string) {
    this.endpoint = endpoint;
  }

  private get = (path = '') => {
    path = path ? `/${path}` : '';

    return axiosInstance
      .get<T>(`${this.endpoint}/${path}`)
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
