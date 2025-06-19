import { Entity } from '@/app/api/lib/models';
import { EntityTechnologiesList } from '@/components/Entities/EntityTechnologiesList';
import { CenteredSpinner, ErrorAlert } from '@/components/common';
import { BackToPreviousLocationLink } from '@/components/common/Link/BackToPreviousLocationLink';
import { useEntityQuery } from '@/hooks';

interface EntityListProps {
  entity: Entity;
}

const EntityList = ({ entity }: EntityListProps) => {
  const { data: technologies = [], isLoading, error } = useEntityQuery(entity);

  if (isLoading) return <CenteredSpinner />;

  if (error) return <ErrorAlert error={error.message} />;

  return (
    <>
      <EntityTechnologiesList technologies={technologies} />
      <BackToPreviousLocationLink />
    </>
  );
};

export default EntityList;
