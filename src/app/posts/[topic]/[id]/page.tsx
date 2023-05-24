'use client';

import { PageLayout } from '@/components/common';
import { usePost } from '@/hooks';
import { QueryParams } from '@/hooks/useEntitySlug';

interface PostProps {
  params: QueryParams;
}

const Post = ({ params }: PostProps) => (
  <PageLayout query={{ queryHook: usePost, params }} />
);

export default Post;
