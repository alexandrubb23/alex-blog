import axios from "axios";

import { env } from "@/env";
import type { QueryFilter } from "@/app/api/lib/sql/getAllPosts";
import { buildSearchParams } from "@/utils/str";

const axiosInstance = axios.create({
  baseURL: `${env.NEXT_PUBLIC_BASE_URL}/api`,
});

export class APIClient<T> {
  constructor(private endpoint: string) {
    this.endpoint = endpoint;
  }

  private get = (path = "", queryFilter?: QueryFilter) => {
    const params = buildSearchParams(queryFilter);
    path = path ? `/${path}` : "";

    return axiosInstance
      .get<T>(`${this.endpoint}${path}${params}`)
      .then((response) => response.data);
  };

  getAll = (queryFilter?: QueryFilter) => {
    return this.get("", queryFilter);
  };

  findOne = (id: string) => {
    return this.get(id);
  };

  post = <T extends Record<string, any>>(data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((response) => response.data);
  };
}

export default APIClient;
