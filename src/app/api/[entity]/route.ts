import matter from "gray-matter";
import { z } from "zod";

import {
  APIResponse,
  PostData,
  RequestQueryParams,
} from "@/app/api/lib/models";
import { handleEntityRequestService } from "@/app/api/lib/services";
import { getAllPosts } from "@/app/api/lib/sql";
import { extractImageFromMarkdown } from "@/utils/parseMarkdownResponseToHTML";
import { NextRequest } from "next/server";
import { technologies } from "../lib/models/technology.type";
import { type GetAllPosts } from "../lib/sql/getAllPosts";
import { parseQuery } from "../lib/validators/parse-query";

const schema = z.object({
  topic: z.enum([...technologies]).optional(),
  excludePost: z.string().optional(),
  limit: z.coerce.number().int().positive().optional().default(100),
});

const traversePosts = (topic: string, posts: PostData[]) => {
  return posts.reduce<PostData[]>((posts, post) => {
    if (topic !== post.topic) return posts;

    const matterResult = matter(post.content);

    const newPost = {
      id: post.id,
      content: matterResult.content,
      postType: post.postType,
      title: matterResult.data.title,
      date: matterResult.data.date,
      topic: matterResult.data.topic,
      image: extractImageFromMarkdown(
        matterResult.content,
        "/images/default-image.png",
      ),
    } as PostData;

    posts.push(newPost);

    return posts;
  }, []);
};

const parseData = (posts: PostData[]): APIResponse[] => {
  const seen = new Set<string>();
  const result: APIResponse[] = [];

  for (const post of posts) {
    if (!seen.has(post.topic)) {
      seen.add(post.topic);

      result.push({
        id: post.topic,
        name: post.description,
        data: traversePosts(post.topic, posts),
      });
    }
  }

  return result;
};

const getData = async ({
  entity,
  queryFilter,
}: GetAllPosts): Promise<APIResponse[]> => {
  try {
    const posts = await getAllPosts({ entity, queryFilter });
    const parsedData = parseData(posts);

    return parsedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const GET = async (req: NextRequest, { params }: RequestQueryParams) => {
  const response = await handleEntityRequestService(async () => {
    const { entity } = await params;
    const queryFilter = parseQuery(schema, req);

    return getData({ entity, queryFilter });
  });

  return response;
};
