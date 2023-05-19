import { Box, Container, ContainerProps } from '@chakra-ui/react';
import Link from 'next/link';

interface AboutAuthorProps {
  name: string;
  description: string;
  textAlign?: ContainerProps['textAlign'];
}

const AboutAuthor = ({
  name,
  description,
  textAlign = 'left',
}: AboutAuthorProps) => {
  return (
    <Container textAlign={textAlign} padding={0}>
      Hello, I&apos;m <strong>{name}</strong>, {description}...
      <Box as='span' ml={2}>
        <Link href='/pages/about-author'>→ Read more about me</Link>
      </Box>
    </Container>
  );
};

export default AboutAuthor;
