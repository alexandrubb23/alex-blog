import Prism from 'prismjs';
import { useEffect } from 'react';

type HTMLTags = keyof JSX.IntrinsicElements;

type HTMLObject = {
  tags: HTMLTags[];
  html: string;
  className?: string;
};

const useAddClassToSpecificTags = ({ className, tags, html }: HTMLObject) => {
  if (!tags || tags.length === 0 || !html) return html;

  let parsedHTML = html;

  tags.forEach(tag => {
    const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'g');
    parsedHTML = html.replace(
      regex,
      `<${tag} class="${className}">$1</${tag}>`
    );
  });

  return parsedHTML;
};

export default useAddClassToSpecificTags;
