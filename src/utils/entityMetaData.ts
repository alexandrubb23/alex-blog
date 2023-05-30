import { Entity } from '@/app/api/lib/models';
import { PageProps } from '@/models';
import pageMetadata, { PageMetadata } from './pageMetadata';

interface EntityMetaData {
  entity: Entity;
  entityMetadata: (metadata: PageMetadata) => PageMetadata;
}

const entityMetaData = ({ entity, entityMetadata }: EntityMetaData) => {
  return async (params: PageProps) => {
    try {
      const metadata = await pageMetadata({
        entity,
        params,
      });

      return entityMetadata(metadata);
    } catch {
      return {
        title: 'Page not found',
      };
    }
  };
};

export default entityMetaData;
