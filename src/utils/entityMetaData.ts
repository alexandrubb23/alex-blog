import { Entity } from '@/app/api/lib/models';
import { PageProps } from '@/models';
import pageMetadata, { PageMetadata } from './pageMetadata';

interface EntityMetaData {
  entity: Entity;
  entityMetadata: (metadata: PageMetadata) => PageMetadata;
}

const entityMetaData = ({ entity, entityMetadata }: EntityMetaData) => {
  return async (params: PageProps) => {
    const metadata = await pageMetadata({
      entity,
      params,
    });

    return entityMetadata(metadata);
  };
};

export default entityMetaData;
