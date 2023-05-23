import APIClient, { FetchResponse } from './api-client';

const postService = new APIClient<FetchResponse>('/posts');

export default postService;
