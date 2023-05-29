import { ROUTES } from '@/app/constants';
import { usePathname } from 'next/navigation';

const useIsHomePage = () => {
  const pathname = usePathname();

  return pathname === ROUTES.HOME;
};

export default useIsHomePage;
