import { Entity, PostData } from '@/app/api/lib/models';
import { AUTHOR } from '@/app/constants';
import { PageProps } from '@/models';
import { APIClient } from '@/services/api-client';

import { extractImageFromMarkdown } from './parseMarkdownResponseToHTML';

export interface PageMetadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    images: string[];
  };
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

  const { title, content } = response;

  return {
    title: `${title} | ${AUTHOR.NAME}`,
    description: title,
    openGraph: {
      title,
      images: [extractImageFromMarkdown(content)],
    },
  };
};

export default pageMetadata;
