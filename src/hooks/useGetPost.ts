import useParseContent from './useParseContent';
import usePost from './usePost';

const useGetPost = (id: string) => {
  const { data, isLoading, error } = usePost(id);

  const post = useParseContent(data);

  return { post, isLoading, error };
};

export default useGetPost;
