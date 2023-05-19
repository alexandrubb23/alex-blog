import { Heading } from '@chakra-ui/react';

import { ListPosts } from '@/components/ListPosts';

const Blog = () => {
  return (
    <>
      <Heading as='h2' size='lg'>
        Blog
      </Heading>
      <ListPosts />
    </>
  );
};

export default Blog;
