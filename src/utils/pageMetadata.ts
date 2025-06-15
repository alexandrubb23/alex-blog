import { Entity, PostData } from '@/app/api/lib/models';
import { AUTHOR } from '@/app/constants';
import { PageProps } from '@/models';
import { APIClient } from '@/services/api-client';

export interface PageMetadata {
  title: string;
  description: string;
}

interface PageMetadataProps {
  entity: Entity;
  params: PageProps;
}

const pageMetadata = async ({
  entity,
  params: { params },
}: PageMetadataProps): Promise<PageMetadata> => {
  const apiClient = new APIClient<PostData>(`/${entity}`);

  const promiseParams = await params;
  const path = Object.values(promiseParams).join('/');
  const response = await apiClient.findOne(path);

  const { title } = response;

  return { title: `${title} | ${AUTHOR.NAME}`, description: title };
};

export default pageMetadata;
