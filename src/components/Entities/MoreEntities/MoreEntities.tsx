import { Box, Card, Grid, GridItem, Image } from "@chakra-ui/react";
import Link from "next/link";

import { PostData } from "@/app/api/lib/models";

interface MoreEntitiesProps {
  data: PostData[];
}

const MoreEntities = ({ data }: MoreEntitiesProps) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap="1rem"
      mt="25px"
    >
      {data.map(({ id, image, title }) => (
        <GridItem key={id} w="100%">
          <Card.Root bg="transparent" border="none" w="100%" overflow="hidden">
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
            </Card.Body>
          </Card.Root>
        </GridItem>
      ))}
    </Grid>
  );
};

export default MoreEntities;
