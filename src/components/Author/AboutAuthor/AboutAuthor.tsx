import { Box, BoxProps } from '@chakra-ui/react';
import Link from 'next/link';

interface AboutAuthorProps {
  name: string;
  description: string;
  textAlign?: BoxProps['textAlign'];
}

const AboutAuthor = ({
  name,
  description,
  textAlign = 'left',
}: AboutAuthorProps) => {
  return (
    <Box textAlign={textAlign} padding={0}>
      Hello, I&apos;m <strong>{name}</strong>, {description}...
      <Box as='span' ml={2}>
        <Link href='/pages/about-author'>→ Read more about me</Link>
      </Box>
    </Box>
  );
};

export default AboutAuthor;
