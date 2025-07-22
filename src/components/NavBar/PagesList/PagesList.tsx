import { Box, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { HamburgerMenu, HorizontalMenu } from "@/components/common";
import pages from "@/data/pages";
import { useIsNotMobile } from "@/hooks";

const PagesList = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isNotMobile = useIsNotMobile();

  useEffect(() => {
    if (showMenu) return;
    setShowMenu(true);
  }, [showMenu]);

  if (!showMenu) return <Box w="100%">{<Spinner />}</Box>;

  const Menu = isNotMobile ? HorizontalMenu : HamburgerMenu;

  return <Menu data={pages} />;
};

export default PagesList;
