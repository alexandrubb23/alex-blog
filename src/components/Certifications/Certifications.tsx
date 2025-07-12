"use client";

import { ENTITIES } from "@/app/api/lib/constants";
import { CenteredSpinner, ErrorAlert } from "@/components/common";
import { useEntityQuery } from "@/hooks";
import Container from "../Layout/Container";
import { DoubleSeparator } from "../common/DoubleSeparator";
import CertificationsList from "./CertificationsList";
import CertificationsHeading from "./CertificationsHeading";

const Certifications = () => {
  const { data: certifications, isLoading } = useEntityQuery({
    entity: ENTITIES.CERTIFICATIONS,
  });

  if (isLoading) return <CenteredSpinner />;

  if (!certifications || certifications.length === 0)
    return <ErrorAlert error="No certifications found." />;

  return (
    <Container>
      <CertificationsHeading />
      <DoubleSeparator />
      <CertificationsList certifications={certifications} />
      <DoubleSeparator />
    </Container>
  );
};

export default Certifications;
