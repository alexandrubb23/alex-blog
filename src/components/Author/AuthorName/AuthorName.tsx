import { useIsHomePage } from '@/hooks';
import { Heading } from '@chakra-ui/react';

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  const isHomePage = useIsHomePage();

  const as = isHomePage ? 'h1' : 'h2';

  return (
    <Heading as={as} size='2xl' fontSize={as === 'h2' ? '2xl' : '4xl'}>
      {name}
    </Heading>
  );
};

export default AuthorName;
