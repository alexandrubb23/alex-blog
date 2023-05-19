'use client';

import { Blog } from '@/components';
import './global.css';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout home>
      <Blog />
    </Layout>
  );
}
