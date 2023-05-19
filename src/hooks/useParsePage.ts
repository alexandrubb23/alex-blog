import { useCallback, useEffect, useState } from 'react';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import usePage, { Page } from './usePage';

const useParsePage = (pageName: string) => {
  const [page, setPage] = useState<Page>(() => ({
    title: '',
    content: '',
  }));

  const { data, isLoading, error } = usePage(pageName);

  const processPage = useCallback(async () => {
    if (!data) return;

    const parsedPage = matter(data);
    const content = await remark().use(html).process(parsedPage.content);

    setPage({
      title: parsedPage.data.title,
      content: content.toString(),
    });
  }, [data]);

  useEffect(() => {
    processPage();
  }, [processPage]);

  console.log({ page });

  return { page, isLoading, error };
};

export default useParsePage;
