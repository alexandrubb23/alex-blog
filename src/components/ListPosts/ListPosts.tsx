import { usePosts } from '@/hooks';
import { EntityList } from '@/components/Entities';

const ListPosts = () => {
  return <EntityList entityType='posts' queryHook={usePosts} />;
};

export default ListPosts;
