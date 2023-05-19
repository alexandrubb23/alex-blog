'use client';

import { useEffect } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import Prism from 'prismjs';

import '@/styles/prism-dracula.css';
import { CenteredSpinner, Date, ErrorAlert } from '@/components/common';
import { Layout } from '@/components/Layout';
import { useAddClassToSpecificTags, useGetPost } from '@/hooks';
import utilStyles from '@/styles/post.module.css';

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

  return (
    <Layout>
      <VStack spacing={5} alignItems='flex-start'>
        <Heading
          as='h1'
          fontSize='2rem'
          lineHeight='1.3'
          fontWeight='800'
          letterSpacing='-0.05rem'
        >
          {post.title}
        </Heading>
        <Box textColor='grey'>
          <Date dateString={post.date} />
        </Box>
        <Box
          className={utilStyles.post}
          dangerouslySetInnerHTML={{ __html: postContent }}
        />
        <Box marginY={2}>
          <Link href='/'>← Back to home</Link>
        </Box>
      </VStack>
    </Layout>
  );
};

export default Post;
