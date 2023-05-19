import { Heading } from '@chakra-ui/react';

interface AuthorNameProps {
  as: 'h1' | 'h2';
  name: string;
}

const AuthorName = ({ as, name }: AuthorNameProps) => {
  return (
    <Heading as={as} size='2xl' fontSize={as === 'h2' ? '2xl' : '4xl'}>
      {name}
    </Heading>
  );
};

export default AuthorName;
