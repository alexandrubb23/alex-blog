import Prism from 'prismjs';
import { useTimeout } from 'usehooks-ts';

import '@/styles/prism-themes.css';
import { useColorMode } from '.';
import { useEffect } from 'react';

const useCodeHighlighting = () => {
  const { colorMode } = useColorMode();

  useTimeout(Prism.highlightAll, 100);

  useEffect(() => {
    Prism.highlightAll();
  }, [colorMode]);
};

export default useCodeHighlighting;
