import Prism from 'prismjs';
import { useEffect } from 'react';

type HTMLObject = {
  tags: string[];
  html: string;
  className?: string;
};

const useAddClassToSpecificTags = ({ className, tags, html }: HTMLObject) => {
  useEffect(() => {
    if (typeof window !== 'undefined') Prism.highlightAll();
  }, [html]);

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
