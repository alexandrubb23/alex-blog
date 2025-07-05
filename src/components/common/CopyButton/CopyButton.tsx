'use client';

// import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { ChakraProvider, IconButton, defaultSystem, useClipboard } from '@chakra-ui/react';
import { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';

// export const CopyButton = ({ code }: { code: string }) => {
//   const { hasCopied, onCopy } = useClipboard(code);

//   return (
//     <IconButton
//       aria-label='Copy code'
//       size='sm'
//       icon={hasCopied ? <CheckIcon color='green' /> : <CopyIcon />}
//       onClick={onCopy}
//       position='absolute'
//       top='0.5rem'
//       right='0.5rem'
//       zIndex={10}
//       variant='outline'
//       colorScheme='gray'
//     />
//   );
// };

// TODO: Also MutationObserver can be used to watch for new <pre> elements.
// It’s reliable, and with a proper .copy-btn-wrapper check, it's safe and idempotent.
// We can safely remove the dependency
/**
 * example:
 * const observer = new MutationObserver(() => {
 *   const pres = document.querySelectorAll('pre');
 *   pres.forEach(pre => {...});
 * });
 * const target = document.getElementById('post-content');
 * observer.observe(target, { childList: true, subtree: true });
 * return () => observer.disconnect();
 */
const CopyButtonsInjector = () => {
  useLayoutEffect(() => {
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
        <ChakraProvider value={defaultSystem}>
          {/* <CopyButton code={pre.textContent || ''} /> */}
        </ChakraProvider>
      );
    });
  });

  return null;
};

export default CopyButtonsInjector;
