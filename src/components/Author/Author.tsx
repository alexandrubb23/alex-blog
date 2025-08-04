import { VStack } from "@chakra-ui/react";

import { useIsHomePage } from "@/hooks";
import { AboutAuthor } from "./AboutAuthor";
import { AuthorAvatar } from "./AuthorAvatar";
import { AuthorName } from "./AuthorName";

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps) => {
  const isHomePage = useIsHomePage();

  if (!isHomePage) return null;

  return (
    <VStack gap="1rem" mt="56px" pb="2.175rem">
      <AuthorAvatar alt={name} fileName="alex.png" />
      <AuthorName name={name} />
      <AboutAuthor />
    </VStack>
  );
};

export default Author;
