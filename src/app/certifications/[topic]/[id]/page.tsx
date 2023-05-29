'use client';

import styles from '@/styles/certificate-layout.module.css';
import { PageLayout } from '@/components/common';
import { useCertificate } from '@/hooks';
import { PageProps } from '@/models';

const Certificate = ({ params }: PageProps) => (
  <PageLayout
    className={styles.certificateLayout}
    data={{
      params,
      queryHook: useCertificate,
    }}
  />
);

export default Certificate;
