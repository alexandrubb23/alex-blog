import { Box, Flex, List, ListItem, Spinner } from '@chakra-ui/react';
import Link from 'next/link';

import usePosts from '@/hooks/usePosts';
import { Date } from '@/components/common';

const ListPosts = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (error) return null;

  if (isLoading)
    return (
      <Flex justifyContent='center' alignItems='center' height='200px'>
        <Spinner />
      </Flex>
    );

  return (
    <List mt={5} spacing={5}>
      {posts?.map(post => (
        <ListItem key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
          <Box textColor='grey'>
            <Date dateString={post.date} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ListPosts;
