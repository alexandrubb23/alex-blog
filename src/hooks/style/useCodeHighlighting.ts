import Prism from 'prismjs';
import { useTimeout } from 'usehooks-ts';

import '@/styles/prism-dracula.css';

const useCodeHighlighting = () => {
  useTimeout(Prism.highlightAll, 100);
};

export default useCodeHighlighting;
