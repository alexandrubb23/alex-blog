import { Box, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';

import { CenteredSpinner, Date } from '@/components/common';
import usePosts from '@/hooks/usePosts';
import { usePostSlug } from '@/hooks';

const ListPosts = () => {
  const { data: posts, isLoading, error } = usePosts();
  const { getSlug } = usePostSlug();

  if (error) return null;

  if (isLoading) return <CenteredSpinner offsetHeight={500} />;

  return (
    <List mt={5} spacing={5}>
      {posts?.map(post => (
        <ListItem key={post.id}>
          <Link href={getSlug(post)}>{post.title}</Link>
          <Box textColor='grey'>
            <Date dateString={post.date} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ListPosts;
