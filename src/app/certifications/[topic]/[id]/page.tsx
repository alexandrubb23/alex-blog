'use client';

import styles from '@/styles/certificate-layout.module.css';
import { PageLayout } from '@/components/common';
import { useCertificate } from '@/hooks';

interface CertificateProps {
  params: {
    id: string;
    topic: string;
  };
}

const Certificate = ({ params }: CertificateProps) => {
  const certificate = useCertificate({ ...params });

  return (
    <PageLayout
      backTo={{
        href: '/certifications',
        text: 'certifications',
      }}
      className={styles.certificateLayout}
      result={certificate}
    />
  );
};

export default Certificate;
