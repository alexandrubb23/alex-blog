import { useCallback, useEffect, useState } from 'react';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { Post } from './usePosts';
import usePost from './usePost';

const useGetPost = (id: string) => {
  const [post, setPost] = useState<Post>(() => ({
    id: '',
    title: '',
    date: '',
    content: '',
  }));

  const { data, isLoading, error } = usePost(id);

  const processPost = useCallback(async () => {
    if (!data) return;

    const parsedPost = matter(data);
    const content = await remark().use(html).process(parsedPost.content);

    const { date, title } = parsedPost.data;

    setPost({
      id,
      title,
      date,
      content: content.toString(),
    });
  }, [data, id]);

  useEffect(() => {
    processPost();
  }, [processPost]);

  return { post, isLoading, error };
};

export default useGetPost;
