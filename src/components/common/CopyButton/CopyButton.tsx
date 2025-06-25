'use client';

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { IconButton, useClipboard, ChakraProvider } from '@chakra-ui/react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';


function CopyButton({ code }: { code: string }) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <IconButton
      aria-label='Copy code'
      size='sm'
      icon={hasCopied ? <CheckIcon color="green" /> : <CopyIcon />}
      onClick={onCopy}
      position='absolute'
      top='0.5rem'
      right='0.5rem'
      zIndex={10}
      variant='outline'
      colorScheme='gray'
    />
  );
}

const CopyButtonsInjector = () => {
  useEffect(() => {
    const pres = document.querySelectorAll('pre');

    pres.forEach(pre => {
      if (pre.querySelector('.copy-btn-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'copy-btn-wrapper';
      wrapper.style.position = 'absolute';
      wrapper.style.top = '0.1rem';
      wrapper.style.right = '0.5rem';
      wrapper.style.zIndex = '10';

      pre.style.position = 'relative';
      pre.appendChild(wrapper);

      const root = createRoot(wrapper);
      root.render(
        <ChakraProvider>
          <CopyButton code={pre.textContent || ''} />
        </ChakraProvider>
      );
    });
  }, []);

  return null;
};

export default CopyButtonsInjector;
