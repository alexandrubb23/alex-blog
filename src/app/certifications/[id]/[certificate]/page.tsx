'use client';

import { PageLayout } from '@/components/common';
import { useCertificate } from '@/hooks';

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
