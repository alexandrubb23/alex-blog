import { PropsWithChildren } from "react";

import { Entity } from "@/app/api/lib/models";
import GlobalLink from "./GlobalLink";

export interface EntitySlug {
  slug: string;
}

interface EntityLinkProps extends EntitySlug {
  entity: Entity;
}

const EntityLink = ({
  slug,
  entity,
  children,
}: PropsWithChildren<EntityLinkProps>) => (
  <GlobalLink
    href={`/${entity}/${slug}`}
    entity={entity}
    slug={slug}
    _hover={{ textDecoration: "underline" }}
  >
    {children}
  </GlobalLink>
);

export default EntityLink;
