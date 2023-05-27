import { usePathname, useRouter } from 'next/navigation';

const useNavigationMenu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isActiveItem = (href: string) => {
    return pathName?.replace(/^\/(.+)/, '$1') === href;
  };

  const goToPage = (href: string) => {
    router.push(href);
  };

  return { isActiveItem, goToPage };
};

export default useNavigationMenu;
