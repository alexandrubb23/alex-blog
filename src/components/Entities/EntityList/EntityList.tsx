import { UseQueryResult } from '@tanstack/react-query';

import { APIResponse, Entity } from '@/app/api/lib/models';
import { BackToPreviousLocationLink } from '@/components/common/Link/BackToPreviousLocationLink';
import { CenteredSpinner, ErrorAlert } from '@/components/common';
import { EntityProvider } from '@/providers';
import { EntityTechnologiesList } from '@/components/Entities/EntityTechnologiesList';

interface EntityListProps {
  entityType: Entity;
  queryHook: () => UseQueryResult<APIResponse[], Error>;
}

const EntityList = ({ entityType, queryHook }: EntityListProps) => {
  const { data: technologies, isLoading, error } = queryHook();

  if (isLoading) return <CenteredSpinner />;

  if (error) return <ErrorAlert error={error.message} />;

  return (
    <EntityProvider data={{ entityType, queryHook }}>
      <EntityTechnologiesList technologies={technologies} />
      <BackToPreviousLocationLink />
    </EntityProvider>
  );
};

export default EntityList;
