import { Box } from "@chakra-ui/react";

import { AUTHOR } from "@/app/constants";
import { Separator } from "@/components/Separator";

const AuthorEmail = () => (
  <Box fontSize="20px">
    {AUTHOR.EMAIL_ADDRESS}
    <Separator height="5px" />
  </Box>
);

export default AuthorEmail;
