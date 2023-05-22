import Prism from 'prismjs';
import { useEffect } from 'react';

import '@/styles/prism-dracula.css';

const useCodeHighlighting = (content: string) => {
  useEffect(() => {
    if (!content) return;

    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, [content]);
};

export default useCodeHighlighting;
