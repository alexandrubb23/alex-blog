'use client';

import { Flex, Heading, Spinner } from '@chakra-ui/react';

import { ErrorAlert } from '@/components/common';
import { Layout } from '@/components/Layout';
import { useGetPost } from '@/hooks';

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
      <Heading as='h1'>{post.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  );
};

export default Post;
