import { Box } from '@chakra-ui/react';

import { Date } from '../Date';

interface PostMetaProps {
  readingTime: string;
  date: string;
}

const PostMeta = ({ readingTime, date }: PostMetaProps) => {
  return (
    <Box
      textColor='grey'
      sx={{
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      <Box>{readingTime}</Box>
      <Box sx={{ transform: 'translateY(-4px)' }}>.</Box>
      <Date dateString={date} />
    </Box>
  );
};

export default PostMeta;
