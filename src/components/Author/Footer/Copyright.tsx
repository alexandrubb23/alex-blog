import { Box } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";

const Copyright = () => (
  <Box>
    © {new Date().getFullYear()} · {AUTHOR.NAME}
  </Box>
);

export default Copyright;
