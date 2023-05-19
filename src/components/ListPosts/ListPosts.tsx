import { Flex, List, ListItem, Spinner } from '@chakra-ui/react';
import Link from 'next/link';

import usePosts from '@/hooks/usePosts';

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
        </ListItem>
      ))}
    </List>
  );
};

export default ListPosts;
