import { EntityController } from '@/app/api/lib/classes/EntityDataReader';

class Posts extends EntityController {
  constructor() {
    super('posts');
  }
}

const getPosts = () => new Posts().getAll();

export default getPosts;
