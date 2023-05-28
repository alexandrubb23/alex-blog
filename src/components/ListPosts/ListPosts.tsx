import { usePosts } from '@/hooks';
import { EntityList } from '../Entities';

const ListPosts = () => {
  return <EntityList entityType='posts' queryHook={usePosts} />;
};

export default ListPosts;
