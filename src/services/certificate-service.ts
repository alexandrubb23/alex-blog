import { PostData } from '@/app/api/lib/models';
import APIClient from './api-client';
import { ENTITIES } from '@/app/api/lib/constants';

const certificateService = new APIClient<PostData>(
  `/${ENTITIES.CERTIFICATIONS}`
);

export default certificateService;
