import { Container, VStack } from '@chakra-ui/react';
import { AuthorAvatar } from './AuthorAvatar';
import { AuthorName } from './AuthorName';
import { AboutAuthor } from './AboutAuthor';

interface AuthorProps {
  name: string;
  isHome?: boolean;
}

const Author = ({ isHome, name }: AuthorProps) => {
  return (
    <VStack spacing={5}>
      <AuthorAvatar alt={name} fileName='alex.png' />
      <AuthorName as={isHome ? 'h1' : 'h2'} name={name} />
      {isHome && <AboutAuthor name={name} />}
    </VStack>
  );
};

export default Author;
