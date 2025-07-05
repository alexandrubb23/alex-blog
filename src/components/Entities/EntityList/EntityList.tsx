import { APIResponse } from "@/app/api/lib/models";
import { EntityTechnologiesList } from "@/components/Entities/EntityTechnologiesList";
import { BackToPreviousLocationLink } from "@/components/common/Link/BackToPreviousLocationLink";

const EntityList = ({ posts }: { posts: APIResponse[] }) => {
  return (
    <>
      <EntityTechnologiesList technologies={posts} />
      <BackToPreviousLocationLink />
    </>
  );
};

export default EntityList;
