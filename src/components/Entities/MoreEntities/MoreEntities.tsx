import { Card, Image, Text } from "@chakra-ui/react";

const MoreEntities = () => {
  return (
    <>
      <Card.Root maxW="lg" overflow="hidden" bg="transparent" border="none">
        <Image
          alt="Green double couch with wooden legs"
          borderRadius="md"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <Card.Body gap="2" mt="12px" padding="0">
          <Card.Title fontSize="24px" fontWeight="600">
            Preventing Object Mutation in TypeScript with Readonly
          </Card.Title>
          <Card.Description fontSize="18px">
            If you believe yourself to be a TypeScript virtuoso, if you consider
            yourself a connoisseur of all things mutation...
          </Card.Description>
        </Card.Body>
      </Card.Root>
      <Card.Root maxW="lg" overflow="hidden" bg="transparent" border="none">
        <Image
          alt="Green double couch with wooden legs"
          borderRadius="md"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <Card.Body gap="2" mt="12px" padding="0">
          <Card.Title fontSize="24px" fontWeight="600">
            Preventing Object Mutation in TypeScript with Readonly
          </Card.Title>
          <Card.Description fontSize="18px">
            If you believe yourself to be a TypeScript virtuoso, if you consider
            yourself a connoisseur of all things mutation...
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default MoreEntities;
