import { PostData } from "@/app/api/lib/models";
import { AUTHOR } from "@/app/constants";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

const CACHE_KEY_SEPARATOR = ":";

// TODO: Replace in-memory markdownCache with persistent cache (e.g., Redis)
const markdownCache = new Map<string, PostData>();

const parseMarkdownResponseToHTML = async (response: PostData) => {
  const { id, topic } = response;
  const cacheKey = `${topic}${CACHE_KEY_SEPARATOR}${id}`;

  try {
    if (markdownCache.has(cacheKey)) {
      return markdownCache.get(cacheKey) as PostData;
    }

    const content = await unified()
      .use(remarkParse)
      // TODO: Fix 'as any' by updating remark-html types
      .use(remarkHtml as any)
      .process(response.content);

    const result = {
      ...response,
      content: content.toString(),
    } as PostData;

    markdownCache.set(cacheKey, result);
    return result;
  } catch (error) {
    throw new Error("Error occurred during content parsing");
  }
};

export function extractImageFromMarkdown(
  markdown: string,
  fallbackImage = AUTHOR.PICTURE,
) {
  const match = markdown.match(/!\[[^\]]*\]\(([^)]+\.(webp|png|jpg|jpeg))\)/i);
  return match?.[1] ?? fallbackImage;
}

export default parseMarkdownResponseToHTML;
