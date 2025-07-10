import { Box, Card, Image } from "@chakra-ui/react";

import { PostData } from "@/app/api/lib/models";
import Link from "next/link";

interface MoreEntitiesProps {
  data: PostData[];
}

const MoreEntities = ({ data }: MoreEntitiesProps) => {
  return (
    <>
      {data.map(({ id, image, title }) => (
        <Card.Root
          bg="transparent"
          border="none"
          key={id}
          maxW="lg"
          overflow="hidden"
        >
          <Box boxSize="260px" overflow={"hidden"} w="100%">
            <Image
              alt={title}
              borderRadius="md"
              h="100%"
              objectFit="cover"
              src={image}
              w="100%"
            />
          </Box>
          <Card.Body gap="2" mt="12px" padding="0">
            <Card.Title fontSize="24px" fontWeight="600">
              <Link href={`/posts/${id}`} passHref>
                {title}
              </Link>
            </Card.Title>
            <Card.Description fontSize="18px">
              If you believe yourself to be a TypeScript virtuoso, if you
              consider yourself a connoisseur of all things mutation...
            </Card.Description>
          </Card.Body>
        </Card.Root>
      ))}
    </>
  );
};

export default MoreEntities;
