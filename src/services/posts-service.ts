import APIClient, { FetchResponse } from './api-client';

const postsService = new APIClient<FetchResponse[]>('/posts/posts.json');

export default postsService;
