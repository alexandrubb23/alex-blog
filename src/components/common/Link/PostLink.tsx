import { PropsWithChildren } from "react";

import { ENTITIES } from "@/app/api/lib/constants";
import EntityLink, { type EntitySlug } from "./EntityLink";

const PostLink = ({ children, slug }: PropsWithChildren<EntitySlug>) => (
  <EntityLink entity={ENTITIES.POSTS} slug={slug}>
    {children}
  </EntityLink>
);

export default PostLink;
