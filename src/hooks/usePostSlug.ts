import { QueryParams } from './usePost';

const ROOT = 'posts';

const usePostSlug = () => {
  const getPostSlug = (post: QueryParams) => {
    const topic = post.topic ? `/${post.topic.toLowerCase()}` : '';
    return `/${ROOT}${topic}/${post.id}`;
  };

  return { getPostSlug };
};

export default usePostSlug;
