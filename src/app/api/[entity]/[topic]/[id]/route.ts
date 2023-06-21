import matter from 'gray-matter';

import { PostData, RequestQueryParams, Entity } from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import getOnePost from '@/app/api/lib/sql/getOnePost';
import { NotFoundError } from '@/app/api/lib/classes/Errors';

const parseData = async (id: string, post: PostData[]) => {
  const matterResult = matter(post[0].content);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostData;
};

const getData = async (id: string, entity: Entity): Promise<PostData> => {
  const post = await getOnePost(entity, id);
  if (post.length === 0) {
    throw new NotFoundError('The post with the given id not found.');
  }

  const result = parseData(id, post);

  return result;
};

export const GET = async (_: Request, { params }: RequestQueryParams) => {
  const { entity, id } = params;

  const response = await handleEntityRequestService(() => getData(id, entity));

  return response;
};
