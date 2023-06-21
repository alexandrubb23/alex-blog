import { PostData } from '@/app/api/lib/models';

const usePostHref = (postData: Pick<PostData, 'id' | 'postType'>) => {
  const { postType, id } = postData;

  const entity = postType ? `${postType}/` : '';

  const href = `${entity}${id}`;

  return href;
};

export default usePostHref;
