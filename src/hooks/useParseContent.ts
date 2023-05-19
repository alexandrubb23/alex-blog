import { useCallback, useEffect, useState } from 'react';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { UseQueryResult } from '@tanstack/react-query';

interface PageObject {
  content: string;
  date: string;
  id: string;
  title: string;
}

const defaultParsedData = {
  content: '',
  date: '',
  id: '',
  title: '',
};

const useParseContent = (response: PageObject | undefined) => {
  const [parsedData, setParsedData] = useState<PageObject>(
    () => defaultParsedData
  );

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
