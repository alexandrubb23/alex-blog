import Prism from 'prismjs';
import { useTimeout } from '@chakra-ui/react';

import '@/styles/prism-dracula.css';

const useCodeHighlighting = () => {
  useTimeout(Prism.highlightAll, 1);
};

export default useCodeHighlighting;
