import { Entity, QueryParams } from '@/app/api/lib/models';

const useEntitySlug = (entity?: Entity) => {
  const getSlug = (params: QueryParams) => {
    const entityRoot = entity ? `/${entity.toLowerCase()}` : '';
    const topic = params.topic ? `/${params.topic.toLowerCase()}` : '';

    return `${entityRoot}${topic}/${params.id}`;
  };

  return { getSlug };
};

export default useEntitySlug;
