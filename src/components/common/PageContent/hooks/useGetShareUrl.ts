import { usePathname } from "next/navigation";

import { env } from "@/env";

const useGetShareUrl = () => `${env.NEXT_PUBLIC_BASE_URL}${usePathname()}`;

export default useGetShareUrl;
