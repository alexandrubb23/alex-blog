import { VStack } from "@chakra-ui/react";

import { AboutAuthor } from "./AboutAuthor";
import { AuthorAvatar } from "./AuthorAvatar";
import { AuthorName } from "./AuthorName";

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps) => {
  return (
    <VStack gap={5}>
      <AuthorAvatar alt={name} fileName="alex.png" />
      <AuthorName name={name} />
      <AboutAuthor />
    </VStack>
  );
};

export default Author;
