import { Box } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";

const Copyright = () => (
  <Box fontSize="16px">
    © {new Date().getFullYear()} {AUTHOR.NAME}. All rights reserved.
  </Box>
);

export default Copyright;
