'use client';

import { PageLayout } from '@/components/common';
import { usePost } from '@/hooks';
import { PageProps } from '@/models';

const Post = ({ params }: PageProps) => (
  <PageLayout data={{ queryHook: usePost, params }} />
);

export default Post;
