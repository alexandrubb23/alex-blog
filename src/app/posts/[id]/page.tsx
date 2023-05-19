'use client';

import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import Link from 'next/link';

import { ErrorAlert } from '@/components/common';
import { Layout } from '@/components/Layout';
import { useGetPost } from '@/hooks';
import utilStyles from '@/styles/post.module.css';

interface PostProps {
  params: {
    id: string;
  };
}

const CenteredSpinner = () => (
  <Flex justifyContent='center' alignItems='center' height='100vh'>
    <Spinner />
  </Flex>
);

const Post = ({ params }: PostProps) => {
  const { post, error, isLoading } = useGetPost(params.id);

  if (error) return <ErrorAlert error={error.message} />;

  if (isLoading) return <CenteredSpinner />;

  return (
    <Layout>
      <Heading
        as='h1'
        fontSize='2rem'
        lineHeight='1.3'
        fontWeight='800'
        letterSpacing='-0.05rem'
        margin='1rem 0'
      >
        {post.title}
      </Heading>
      <Box
        className={utilStyles.post}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Box marginY={2}>
        <Link href='/'>← Back to home</Link>
      </Box>
    </Layout>
  );
};

export default Post;
