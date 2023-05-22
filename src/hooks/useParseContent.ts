import { useCallback, useEffect, useState } from 'react';

import { FetchResponse } from '@/services/api-client';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const useParseContent = (response: FetchResponse | undefined) => {
  const [parsedData, setParsedData] = useState<FetchResponse | null>(null);

  const processPage = useCallback(async () => {
    if (!response) return;

    try {
      const parsedPage = matter(response);
      const content = await remark().use(html).process(parsedPage.content);

      const { date, id, title } = parsedPage.data;

      setParsedData({
        content: content.toString(),
        date,
        id,
        title,
      });
    } catch (error) {
      console.error('Error occurred during content parsing', error);
    }
  }, [response]);

  useEffect(() => {
    processPage();
  }, [processPage]);

  return parsedData;
};

export default useParseContent;
