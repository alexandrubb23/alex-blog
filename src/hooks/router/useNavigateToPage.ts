import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const useNavigateToPage = () => {
  const router = useRouter();

  return (path: string, options?: NavigateOptions) => {
    router.push(path, options);
  };
};

export default useNavigateToPage;
