import { PostData } from '@/app/api/lib/models';
import { AUTHOR } from '@/app/constants';
import { remark } from 'remark';
import html from 'remark-html';

const CACHE_KEY_SEPARATOR = ':';

// TODO: Replace in-memory markdownCache with persistent cache (e.g., Redis)
const markdownCache = new Map<string, PostData>();

const parseMarkdownResponseToHTML = async (response: PostData) => {
  const { id, topic } = response;
  const cacheKey = `${topic}${CACHE_KEY_SEPARATOR}${id}`.toLowerCase();

  try {
    if (markdownCache.has(cacheKey)) {
      console.log(`Cache hit for ${cacheKey}`);
      return markdownCache.get(cacheKey) as PostData;
    }

    const content = await remark().use(html).process(response.content);

    const result = {
      ...response,
      content: content.toString(),
    } as PostData;

    markdownCache.set(cacheKey, result);
    return result;
  } catch (error) {
    throw new Error('Error occurred during content parsing');
  }
};

export function extractImageFromMarkdown(markdown: string) {
  const match = markdown.match(/!\[[^\]]*\]\(([^)]+\.(webp|png|jpg|jpeg))\)/i);
  return match?.[1] ?? AUTHOR.PICTURE;
}

export default parseMarkdownResponseToHTML;
