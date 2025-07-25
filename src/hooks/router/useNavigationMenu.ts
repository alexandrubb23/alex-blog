import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigationMenu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isActiveItem = useCallback(
    (href: string) => pathName === href,
    [pathName],
  );

  const goToPage = useCallback(
    (href: string) => {
      if (isActiveItem(href)) return;
      router.push(href);
    },
    [router, isActiveItem],
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
