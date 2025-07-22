import { Heading } from "@chakra-ui/react";

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  return (
    <Heading
      as="h1"
      fontSize="4xl"
      lineHeight="2.5rem"
      size="2xl"
      textAlign="center"
    >
      {name}
    </Heading>
  );
};

export default AuthorName;
