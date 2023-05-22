import { PageObject } from './usePage';

export type QueryParams = Pick<PageObject, 'id' | 'topic'>;

const useEntitySlug = (entity: string) => {
  const getSlug = (params: QueryParams) => {
    const topic = params.topic ? `/${params.topic.toLowerCase()}` : '';
    return `/${entity}${topic}/${params.id}`;
  };

  return { getSlug };
};

export default useEntitySlug;
