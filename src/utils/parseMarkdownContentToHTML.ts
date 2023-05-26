import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { FetchResponse } from '@/services/api-client';

const parseMarkdownContentToHTML = async (response: FetchResponse) => {
  try {
    const parsedPage = matter(response);
    const content = await remark().use(html).process(parsedPage.content);

    return {
      ...parsedPage.data,
      content: content.toString(),
    } as FetchResponse;
  } catch (error) {
    throw new Error('Error occurred during content parsing');
  }
};

export default parseMarkdownContentToHTML;
