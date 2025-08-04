import Prism from "prismjs";
import { useTimeout } from "usehooks-ts";

import { useColorMode } from "@/components/ui/color-mode";
import "@/styles/prism-themes.css";
import { useEffect } from "react";

const useCodeHighlighting = () => {
  const { colorMode } = useColorMode();

  useTimeout(Prism.highlightAll, 100);

  useEffect(() => {
    Prism.highlightAll();
  }, [colorMode]);
};

export default useCodeHighlighting;
