'use client';

import { PageLayout } from '@/components/common';
import { usePost } from '@/hooks';
import { QueryParams } from '@/hooks/usePost';

interface PostProps {
  params: QueryParams;
}

const Post = ({ params }: PostProps) => {
  const post = usePost({ ...params });

  return <PageLayout result={post} />;
};

export default Post;
