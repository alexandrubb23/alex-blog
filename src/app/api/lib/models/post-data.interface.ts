import type { Technology } from ".";

interface PostData {
  content: string;
  date: string;
  id: string;
  postType: string;
  title: string;
  topic: string;
  description: string;
  // TODO: Create migration
  image: string;
}

export type PostDataOrUndefined = PostData | undefined;

export default PostData;
