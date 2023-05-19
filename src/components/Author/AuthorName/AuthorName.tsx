import { Heading } from '@chakra-ui/react';

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  return (
    <Heading as='h1' size='2xl'>
      {name}
    </Heading>
  );
};

export default AuthorName;
