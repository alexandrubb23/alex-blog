import matter from 'gray-matter';

import { Entity, PostData, RequestQueryParams } from '@/app/api/lib/models';
import { handleEntityRequestService } from '@/app/api/lib/services';
import getOnePost from '@/app/api/lib/sql/getOnePost';

const parseData = (id: string, post: PostData) => {
  const matterResult = matter(post.content);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostData;
};

const getData = async (id: string, entity: Entity): Promise<PostData> => {
  try {
    const post = await getOnePost(entity, id);
    const result = parseData(id, post);

    return result;
  } catch (error) {
    throw error;
  }
};

export const GET = async (_: Request, { params }: RequestQueryParams) => {
  const { entity, id } = await params;

  const response = await handleEntityRequestService(() => getData(id, entity));

  return response;
};
