import APIClient, { FetchResponse } from './api-client';

const pageService = new APIClient<FetchResponse>('/pages');

export default pageService;
