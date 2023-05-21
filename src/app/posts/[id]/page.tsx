'use client';

import { PageLayout } from '@/components/common';
import { usePost } from '@/hooks';

interface PostProps {
  params: {
    id: string;
  };
}

const Post = ({ params }: PostProps) => {
  const post = usePost(params.id);

  return <PageLayout result={post} />;
};

export default Post;
