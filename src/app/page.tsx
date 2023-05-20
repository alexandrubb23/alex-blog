'use client';

import './global.css';
import { Blog } from '@/components';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout home>
      <Blog />
    </Layout>
  );
}
