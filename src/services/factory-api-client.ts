import { Entity } from "@/app/api/lib/models";
import { APIClient } from "./api-client";

function factoryApiClient<T>(entity: Entity): APIClient<T> {
  return new APIClient<T>(`/${entity}`);
}

export default factoryApiClient;
