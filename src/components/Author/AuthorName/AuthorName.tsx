import { Heading } from "@chakra-ui/react";

interface AuthorNameProps {
  name: string;
}

const AuthorName = ({ name }: AuthorNameProps) => {
  return (
    <Heading
      as="h1"
      fontSize={{
        smDown: "1.75rem",
        sm: "2.25rem",
        md: "2.25rem",
        lg: "2.25rem",
        xl: "2.5rem",
        "2xl": "2.75rem",
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
