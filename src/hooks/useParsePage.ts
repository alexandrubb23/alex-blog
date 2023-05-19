import { useCallback, useEffect, useState } from 'react';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import usePage, { Page } from './usePage';

const useParsePage = (pageName: string) => {
  const [page, setPage] = useState<Page>(() => ({
    content: '',
    date: '',
    id: '',
    title: '',
  }));

  const { data, isLoading, error } = usePage(pageName);

  const processPage = useCallback(async () => {
    if (!data) return;

    const parsedPage = matter(data);
    const content = await remark().use(html).process(parsedPage.content);

    setPage({
      content: content.toString(),
      date: parsedPage.data.date,
      id: parsedPage.data.id,
      title: parsedPage.data.title,
    });
  }, [data]);

  useEffect(() => {
    processPage();
  }, [processPage]);

  console.log({ page });

  return { page, isLoading, error };
};

export default useParsePage;
