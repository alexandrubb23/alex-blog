import { HStack } from "@chakra-ui/react";

import { useIsNotMobile } from "@/hooks";
import { PagesList } from "./PagesList";

const NavBar = () => {
  const isNotMobile = useIsNotMobile();

  return (
    <HStack
      padding={{
        lg: "10px",
      }}
    >
      <PagesList />
    </HStack>
  );
};

export default NavBar;
