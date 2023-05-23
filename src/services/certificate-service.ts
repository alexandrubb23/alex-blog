import APIClient, { FetchResponse } from './api-client';

const certificateService = new APIClient<FetchResponse>('/certifications');

export default certificateService;
