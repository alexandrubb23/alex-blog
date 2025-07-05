"use client";

import { Layout } from "@/components/Layout";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Layout>
      <Box padding="6" boxShadow="lg">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={20} gap="4" height="2" />
      </Box>
    </Layout>
  );
};

export default Loading;
