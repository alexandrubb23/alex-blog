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

const Certificate = ({ params }: CertificateProps) => (
  <PageLayout
    className={styles.certificateLayout}
    query={{
      params,
      queryHook: useCertificate,
    }}
  />
);

export default Certificate;
