'use client';

import styles from '@/styles/certificate-layout.module.css';
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
