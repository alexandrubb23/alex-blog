import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const useNavigationMenu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isActiveItem = (href: string) => pathName === href;

  const goToPage = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router],
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
