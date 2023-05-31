'use client';

import { ENTITIES } from '@/app/api/lib/constants';
import { PageLayout } from '@/components/common';
import { PageProps } from '@/models';
import styles from '@/styles/certificate-layout.module.css';

const Certificate = ({ params }: PageProps) => (
  <PageLayout
    className={styles.certificateLayout}
    value={{ entity: ENTITIES.CERTIFICATIONS, params }}
  />
);

export default Certificate;
