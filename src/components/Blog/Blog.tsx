import { Box, Heading, Text } from '@chakra-ui/react';
import { MdOutlineArticle } from 'react-icons/md';

import { ListPosts } from '@/components/ListPosts';
import { useIsHomePage, useIconStyle } from '@/hooks';

const Blog = () => {
  const iconStyle = useIconStyle();
  const isHomePage = useIsHomePage();

  return (
    <>
      <Box display='inline-block' {...iconStyle}>
        <MdOutlineArticle size='15px' />
      </Box>
      <Heading as={isHomePage ? 'h2' : 'h1'} size='lg'>
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
