import { Entity } from '@/app/api/lib/models';
import { AUTHOR } from '@/app/constants';
import { PageProps } from '@/models';

import getOnePost from '@/app/api/lib/sql/getOnePost';
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
}: PageMetadataProps): Promise<PageMetadata | undefined> => {
  const promiseParams = await params;
  const path = Object.values(promiseParams).join('/');

  const response = await getOnePost(entity, path);
  if (!response) return;

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
