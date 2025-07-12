import { Technology } from ".";
import PostData from "./post-data.interface";

interface APIResponse {
  id: Technology;
  name: string;
  data: PostData[];
}

export default APIResponse;
