import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { FetchResponse } from '@/services/api-client';

const parseMarkdownResponseToHTML = async (response: FetchResponse) => {
  try {
    const content = await remark().use(html).process(response.content);

    return {
      ...response,
      content: content.toString(),
    } as FetchResponse;
  } catch (error) {
    throw new Error('Error occurred during content parsing');
  }
};

export default parseMarkdownResponseToHTML;
