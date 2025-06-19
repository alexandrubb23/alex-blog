import { ENTITIES } from '@/app/api/lib/constants';
import hydratedPage, { type EntityProps } from '@/app/hydratedPage';

const Post = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.POSTS,
  });

export default Post;
