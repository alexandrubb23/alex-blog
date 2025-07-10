import matter from "gray-matter";
import { z } from "zod";

import {
  APIResponse,
  PostData,
  RequestQueryParams,
  Technology,
} from "@/app/api/lib/models";
import { handleEntityRequestService } from "@/app/api/lib/services";
import { getAllPosts } from "@/app/api/lib/sql";
import { NextRequest, NextResponse } from "next/server";
import { type GetAllPosts } from "../lib/sql/getAllPosts";
import { extractImageFromMarkdown } from "@/utils/parseMarkdownResponseToHTML";
import { HTTPStatusError } from "../lib/classes/Errors";

const querySchema = z.object({
  topic: z.string().optional(),
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

    const searchParams = req.nextUrl.searchParams.entries();
    const queryFilter = Object.fromEntries(searchParams);

    const parsed = querySchema.safeParse(queryFilter);
    if (!parsed.success) {
      throw new HTTPStatusError(
        "Invalid query parameters. Please check the request and try again.",
        400,
      );
    }

    return getData({ entity, queryFilter });
  });

  return response;
};
