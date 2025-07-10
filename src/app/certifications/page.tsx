"use client";

import { Heading, Text } from "@chakra-ui/react";

import { Certifications as CertificationsList } from "@/components/Certifications";
import { Layout } from "@/components/Layout";

const Certifications = () => {
  return (
    <Layout>
      <CertificationsList />
    </Layout>
  );
};

export default Certifications;
