import { HamburgerMenu, HorizontalMenu } from "@/components/common";
import pages from "@/data/pages";
import { useIsNotMobile } from "@/hooks";

const PagesList = () => {
  const isNotMobile = useIsNotMobile();

  const Menu = isNotMobile ? HorizontalMenu : HamburgerMenu;

  return <Menu data={pages} />;
};

export default PagesList;
