'use client';

import { ENTITIES } from '@/app/api/lib/constants';
import { PageLayout } from '@/components/common';
import { PageProps } from '@/models';
import styles from '@/styles/certificate-layout.module.css';

const Exercise = ({ params }: PageProps) => (
  <PageLayout
    className={styles.certificateLayout}
    value={{ entity: ENTITIES.EXERCISES, params }}
  />
);

export default Exercise;
