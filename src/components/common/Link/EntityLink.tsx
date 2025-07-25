import { Link } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { Entity } from "@/app/api/lib/models";

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
  <Link
    aria-label={`${entity} link to ${slug}`}
    href={`/${entity}/${slug}`}
    _hover={{ textDecoration: "underline", color: "primary" }}
  >
    {children}
  </Link>
);

export default EntityLink;
