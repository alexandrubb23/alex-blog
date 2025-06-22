import Prism from 'prismjs';
import { useLayoutEffect } from 'react';

import '@/styles/prism-dracula.css';

const useCodeHighlighting = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 100);
  }, []);
};

export default useCodeHighlighting;
