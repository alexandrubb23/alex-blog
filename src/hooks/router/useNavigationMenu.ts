import { usePathname } from "next/navigation";
import { useNavigateToPage } from ".";

const useNavigationMenu = () => {
  const pathName = usePathname();
  const navigateToPage = useNavigateToPage();

  const isActiveItem = (href: string) => pathName === href;

  const goToPage = (href: string) => {
    if (isActiveItem(href)) return;
    navigateToPage(href);
  };

  const handleItemClick = (id: string) => () => {
    goToPage(id);
  };

  return { isActiveItem, goToPage, handleItemClick };
};

export default useNavigationMenu;
