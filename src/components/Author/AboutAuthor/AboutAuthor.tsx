import { Box, BoxProps, Heading } from '@chakra-ui/react';
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
    <Heading as='h2' fontSize="24px">
      <Box textAlign={textAlign} padding={0}>
        Hello, I&apos;m{' '}
        <Box as='span' color='green.400'>
          {name}
        </Box>
        , I&apos;m a Software Engineer that companies{' '}
        <Box as='span' color='pink.500'>
          love to hire
        </Box>{' '}
        <Box as='span' ml={2} fontSize="12px">
          <Link href='/pages/about-author'>→ Read about me</Link>
        </Box>
      </Box>
    </Heading>  
  );
};

export default AboutAuthor;
