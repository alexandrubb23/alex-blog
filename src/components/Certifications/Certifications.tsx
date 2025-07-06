"use client";

import { ENTITIES } from "@/app/api/lib/constants";
import { EntityList } from "@/components/Entities";
import { CenteredSpinner, ErrorAlert } from "@/components/common";
import { useEntityQuery } from "@/hooks";

const Certifications = () => {
  const { data: certifications, isLoading } = useEntityQuery(
    ENTITIES.CERTIFICATIONS,
  );

  if (isLoading) return <CenteredSpinner />;

  if (!certifications || certifications.length === 0)
    return <ErrorAlert error="No certifications found." />;

  return <EntityList data={certifications} />;
};

export default Certifications;
