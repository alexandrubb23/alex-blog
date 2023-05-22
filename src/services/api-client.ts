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

export default axiosInstance;
