import APIClient, { FetchResponse } from './api-client';

const postsService = new APIClient<FetchResponse[]>('/posts');

export default postsService;
