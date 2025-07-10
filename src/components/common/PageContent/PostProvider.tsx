import { createContext, useContext } from "react";

import { PostData } from "@/app/api/lib/models";

export const PostContext = createContext<PostData>({
  id: "",
  title: "",
  date: "",
  content: "",
  topic: "React",
  description: "",
  image: "",
  postType: "post",
});

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error(
      "PageContent compound components must be used within PageContent",
    );
  }

  return context;
};

export const PostProvider = PostContext.Provider;
