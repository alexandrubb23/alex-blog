import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { useNavigateToPage } from ".";

const useNavigationMenu = () => {
  const pathName = usePathname();
  const navigateToPage = useNavigateToPage();

  const isActiveItem = useCallback(
    (href: string) => pathName === href,
    [pathName],
  );

  const goToPage = useCallback(
    (href: string) => {
      if (isActiveItem(href)) return;
      navigateToPage(href);
    },
    [navigateToPage, isActiveItem],
  );

  const handleItemClick = useCallback(
    (id: string) => () => {
      goToPage(id);
    },
    [goToPage],
  );

  return { isActiveItem, goToPage, handleItemClick };
};

export default useNavigationMenu;
