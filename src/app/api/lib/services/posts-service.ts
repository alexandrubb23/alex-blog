import { EntityController } from '@/app/api/lib/classes/EntityDataReader';
import { QueryParams } from '@/hooks/router/useEntitySlug';

const createPostsService = () => {
  const posts = new EntityController('posts');

  return {
    getAll: () => posts.getAll(),
    findOne: (params: QueryParams) => posts.findOne(params),
  };
};

const postsService = createPostsService();

export default postsService;
