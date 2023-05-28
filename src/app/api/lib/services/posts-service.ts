import { EntityController } from '@/app/api/lib/classes/EntityDataReader';

const ENTITY_NAME = 'posts';

class Posts extends EntityController {
  constructor() {
    super(ENTITY_NAME);
  }
}

const getPosts = () => new Posts().getAll();

export default getPosts;
