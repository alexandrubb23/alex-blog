import { PostData, QueryParams } from '@/app/api/lib/models';
import { AUTHOR } from '@/app/constants';
import APIClient from '@/services/api-client';

export interface Params {
  params: QueryParams;
}

interface PageMetadata {
  title: string;
  description: string;
}

const pageMetadata = async (
  httpService: APIClient<PostData>,
  { params }: Params
): Promise<PageMetadata> => {
  const path = Object.values(params).join('/');
  const { title } = await httpService.findOne(path);

  return { title: `${title} | ${AUTHOR.NAME}`, description: title };
};

export default pageMetadata;
