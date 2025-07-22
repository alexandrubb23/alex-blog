import { HStack } from "@chakra-ui/react";

import { PagesList } from "./PagesList";

const NavBar = () => (
  <HStack padding="10px">
    <PagesList />
  </HStack>
);

export default NavBar;
