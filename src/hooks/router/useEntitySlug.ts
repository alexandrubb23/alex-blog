import { PostData } from '@/app/api/lib/models';

export type QueryParams = Pick<PostData, 'id' | 'topic'>;

const useEntitySlug = (entity?: string) => {
  const getSlug = (params: QueryParams) => {
    const entityRoot = entity ? `/${entity.toLowerCase()}` : '';
    const topic = params.topic ? `/${params.topic.toLowerCase()}` : '';

    return `${entityRoot}${topic}/${params.id}`;
  };

  return { getSlug };
};

export default useEntitySlug;
