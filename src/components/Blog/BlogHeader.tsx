import { Box, Heading } from "@chakra-ui/react";

import { APIResponse } from "@/app/api/lib/models";
import { ItemsList } from "../ItemsList";

interface BlogHeaderProps {
  isHomePage: boolean;
  data: APIResponse[];
  onSelect: (id: string) => void;
  selectedId?: string | null;
}

const BlogHeader = ({
  isHomePage,
  data,
  onSelect,
  selectedId,
}: BlogHeaderProps) => (
  <Box display="flex" justifyContent="space-between">
    <Heading as={isHomePage ? "h2" : "h1"} fontSize="28px" fontWeight={500}>
      From the Blog
    </Heading>
    <ItemsList
      addItems={["All"]}
      data={data}
      onClick={onSelect}
      selectedId={selectedId}
    />
  </Box>
);

export default BlogHeader;
