import { Entity, PostData } from '@/app/api/lib/models';
import { AUTHOR } from '@/app/constants';
import { PageProps } from '@/models';

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
  const path = Object.values(params).join('/');
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${entity}/${path}`
  );

  if (!response.ok) return { title: response.statusText, description: '' };

  const body: PostData = await response.json();
  const { title } = body;

  return { title: `${title} | ${AUTHOR.NAME}`, description: title };
};

export default pageMetadata;
