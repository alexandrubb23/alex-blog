import type { Technology } from ".";

interface PostData {
  content: string;
  date: string;
  id: string;
  postType: string;
  title: string;
  topic: Technology;
  description: string;
}

export type PostDataOrUndefined = PostData | undefined;

export default PostData;
