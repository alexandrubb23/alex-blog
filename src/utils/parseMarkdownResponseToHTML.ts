import { PostData } from '@/app/api/lib/models';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const parseMarkdownResponseToHTML = async (response: PostData) => {
  try {
    const content = await remark().use(html).process(response.content);

    return {
      ...response,
      content: content.toString(),
    } as PostData;
  } catch (error) {
    throw new Error('Error occurred during content parsing');
  }
};

export default parseMarkdownResponseToHTML;
