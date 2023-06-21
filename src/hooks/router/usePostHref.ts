import { PostData } from '@/app/api/lib/models';

const usePostHref = (postData: Pick<PostData, 'id' | 'postType' | 'topic'>) => {
  const { postType, id, topic } = postData;

  const entity = postType ? `${postType}/` : '';

  const href = `${entity}${topic.toLowerCase()}/${id}`;

  return href;
};

export default usePostHref;
