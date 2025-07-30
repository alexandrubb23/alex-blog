import { HStack } from "@chakra-ui/react";

import { ColorModeButton } from "@/components/ui/color-mode";
import { PagesList } from "./PagesList";

const NavBar = () => (
  <HStack padding="10px">
    <PagesList />
    <ColorModeButton />
  </HStack>
);

export default NavBar;
