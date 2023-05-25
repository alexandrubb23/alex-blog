import { Box, Heading, Text } from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';

import { ListPosts } from '@/components/ListPosts';

const Blog = () => {
  return (
    <>
      <Box
        display='inline-block'
        bg='#181738'
        borderRadius='full'
        padding='10px'
        color='pink.400'
      >
        <MdOutlineArticle size='15px' />
      </Box>
      <Heading as='h2' size='lg'>
        Blog
      </Heading>
      <Text mt={2}>
        Welcome to my blog section, where I share insightful articles on various
        technologies such as Java, JavaScript, TypeScript, React, and more.
        Explore a wealth of knowledge, practical tips, and in-depth discussions
        on these popular tech topics.
      </Text>
      <ListPosts />
    </>
  );
};

export default Blog;
