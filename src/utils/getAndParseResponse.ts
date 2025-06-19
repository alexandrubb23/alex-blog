import matter from 'gray-matter';

import { Entity, PostData } from '@/app/api/lib/models';
import type { PostDataOrUndefined } from '@/app/api/lib/models/post-data.interface';
import getOnePost from '@/app/api/lib/sql/getOnePost';
const parseData = (id: string, post: PostData) => {
  const matterResult = matter(post.content);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostData;
};

const getAndParseResponse = async (
  entity: Entity,
  id: string
): Promise<PostDataOrUndefined> => {
  const post = await getOnePost(entity, id);
  if (!post) return undefined;

  const result = parseData(id, post);
  return result;
};

export default getAndParseResponse;
