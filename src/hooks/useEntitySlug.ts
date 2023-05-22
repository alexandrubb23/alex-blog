import { FetchResponse } from '@/services/api-client';

export type QueryParams = Pick<FetchResponse, 'id' | 'topic'>;

const useEntitySlug = (entity: string) => {
  const getSlug = (params: QueryParams) => {
    const topic = params.topic ? `/${params.topic.toLowerCase()}` : '';
    return `/${entity}${topic}/${params.id}`;
  };

  return { getSlug };
};

export default useEntitySlug;
