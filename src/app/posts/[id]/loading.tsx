"use client";

import { Layout } from "@/components/Layout";
import Container from "@/components/Layout/Container";
import {
  Box,
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Layout>
      <Container>
        <VStack gap={5} align="stretch">
          <Flex justify="center">
            <SkeletonCircle size="10" />
          </Flex>
          <Skeleton height="26px" width="100%" mx="auto" />
          <Skeleton height="15px" width="70%" mx="auto" />
          <Box
            borderTop="2px solid"
            borderBottom="6px double"
            borderColor="gray.200"
            pt={6}
            pb={6}
          >
            <Flex justify="space-between" align="center" flexWrap="wrap">
              <Flex align="center" gap={4}>
                <SkeletonCircle size="12" />
                <Box>
                  <Skeleton height="16px" width="180px" />
                  <Skeleton height="16px" width="210px" mt={3} />
                </Box>
              </Flex>
              <HStack gap={4} mt={{ base: 4, md: 0 }}>
                {[...Array(4)].map((_, i) => (
                  <Skeleton
                    key={i}
                    height="36px"
                    width="87px"
                    borderRadius="xl"
                    mt="-2px"
                  />
                ))}
              </HStack>
            </Flex>
          </Box>
          <Box pt={6}>
            <Skeleton height="100vh" borderRadius="md" />
          </Box>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Loading;
