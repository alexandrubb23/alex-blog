import { Box, Button } from "@chakra-ui/react";

import { RiDownload2Fill } from "react-icons/ri";

const ResumeButton = () => (
  <Box display="flex" flex="0 0 100px" hideBelow="md">
    <Button
      variant="outline"
      border="2px solid"
      borderColor="black"
      borderRadius="2rem"
    >
      <RiDownload2Fill />
      My Resume
    </Button>
  </Box>
);

export default ResumeButton;
