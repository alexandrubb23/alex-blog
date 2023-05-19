'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';

import {
  CenteredSpinner,
  ErrorAlert,
  PageLayout
} from '@/components/common';
import { useAddClassToSpecificTags, useGetPost } from '@/hooks';
import '@/styles/prism-dracula.css';

interface PostProps {
  params: {
    id: string;
  };
}

const Post = ({ params }: PostProps) => {
  const { post, error, isLoading } = useGetPost(params.id);
  const postContent = useAddClassToSpecificTags({
    tags: ['pre', 'code'],
    html: post.content,
    className: 'language-js',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') Prism.highlightAll();
  }, [post]);

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading) return <CenteredSpinner />;

  const parsedPost = { ...post, content: postContent };

  return <PageLayout data={parsedPost} />;
};

export default Post;
