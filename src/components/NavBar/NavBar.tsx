import { HStack } from "@chakra-ui/react";

import { ColorModeButton } from "@/components/ui/color-mode";
import { useIsNotMobile } from "@/hooks";
import { PagesList } from "./PagesList";

const NavBar = () => {
  const isNotMobile = useIsNotMobile();

  return (
    <HStack padding="10px">
      {!isNotMobile && <ColorModeButton mr="5" />}
      <PagesList />
      {isNotMobile && <ColorModeButton />}
    </HStack>
  );
};

export default NavBar;
