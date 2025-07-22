import { Heading } from "@chakra-ui/react";

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  return (
    <Heading
      as="h1"
      fontSize={{
        smDown: "28px",
        sm: "30px",
        md: "32x",
        lg: "34px",
        xl: "36px",
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
