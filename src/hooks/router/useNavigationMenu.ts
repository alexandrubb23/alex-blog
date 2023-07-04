import { usePathname, useRouter } from 'next/navigation';

const useNavigationMenu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isActiveItem = (href: string) => pathName === href;

  const goToPage = (href: string) => {
    router.push(href);
  };

  return { isActiveItem, goToPage };
};

export default useNavigationMenu;
