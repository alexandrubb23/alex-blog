import { VStack } from '@chakra-ui/react';

import { AboutAuthor } from './AboutAuthor';
import { AuthorAvatar } from './AuthorAvatar';
import { AuthorName } from './AuthorName';

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps) => {
  return (
    <VStack spacing={5}>
      <AuthorAvatar alt={name} fileName='alex.png' />
      <AuthorName name={name} />
      <AboutAuthor name={name} />
    </VStack>
  );
};

export default Author;
