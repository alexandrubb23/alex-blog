import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologiesList } from "@/components/Entities/EntityTechnologiesList";
import { BackToPreviousLocationLink } from "@/components/common/Link/BackToPreviousLocationLink";

const EntityList = ({ data }: { data: APIResponse[] }) => (
  <>
    <EntityTechnologiesList technologies={data} />
    <BackToPreviousLocationLink />
  </>
);

export default EntityList;
