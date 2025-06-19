interface PostData {
  content: string;
  date: string;
  id: string;
  postType: string;
  title: string;
  topic: string;
}

export type PostDataOrUndefined = PostData | undefined;

export default PostData;
