import { useBreakpointValue } from "@chakra-ui/react";

const DEVICES = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
} as const;

const { MOBILE, DESKTOP } = DEVICES;

const useIsNotMobile = () => {
  const device =
    useBreakpointValue({
      base: MOBILE,
      md: DESKTOP,
    }) ?? MOBILE;

  return device !== "mobile";
};

export default useIsNotMobile;
