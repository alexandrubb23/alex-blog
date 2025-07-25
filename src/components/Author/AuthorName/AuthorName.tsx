import { Heading } from "@chakra-ui/react";

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  return (
    <Heading
      as="h1"
      fontSize={{
        sm: "28px",
        smDown: "28px",
        lg: "36px",
      }}
      lineHeight="2.5rem"
      size="2xl"
      textAlign="center"
    >
      {name}
    </Heading>
  );
};

export default AuthorName;
