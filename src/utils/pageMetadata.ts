import matter from 'gray-matter';

import { QueryParams } from '@/hooks/router/useEntitySlug';
import APIClient, { FetchResponse } from '@/services/api-client';
import { AUTHOR } from '@/app/constants';

export interface Params {
  params: QueryParams;
}

interface PageMetadata {
  title: string;
  description: string;
}

const pageMetadata = async (
  httpService: APIClient<FetchResponse>,
  { params }: Params
): Promise<PageMetadata> => {
  const path = Object.values(params).join('/');
  const result = await httpService.findOne(`${path}.md`);

  const { data } = matter(result);
  const { title } = data;

  return { title: `${title} | ${AUTHOR.NAME}`, description: title };
};

export default pageMetadata;
