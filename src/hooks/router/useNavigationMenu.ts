import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const useNavigationMenu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isActiveItem = (href: string) => pathName === href;

  const goToPage = (href: string) => {
    router.push(href);
  };

  const handleItemClick = useCallback(
    (id: string) => () => {
      goToPage(id);
    },
    [router],
  );

  return { isActiveItem, goToPage, handleItemClick };
};

export default useNavigationMenu;
