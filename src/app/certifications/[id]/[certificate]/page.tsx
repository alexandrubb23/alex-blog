'use client';

import { CenteredSpinner, ErrorAlert, PageLayout } from '@/components/common';
import { useCertificate, useParseContent } from '@/hooks';

interface CertificateProps {
  params: {
    id: string;
  };
}

const Certificate = ({ params }: CertificateProps) => {
  const path = Object.values(params).join('/');
  
  const certificate = useCertificate(path);

  return <PageLayout result={certificate} />;
};

export default Certificate;
