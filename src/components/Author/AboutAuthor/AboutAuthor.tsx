import { Container, ContainerProps } from '@chakra-ui/react';

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
      Hello, I&apos;m <strong>{name}</strong>, {description}
    </Container>
  );
};

export default AboutAuthor;
