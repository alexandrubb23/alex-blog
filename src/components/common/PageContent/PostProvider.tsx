import { createContext, use } from "react";

import { PostData } from "@/app/api/lib/models";

export const PostContext = createContext<PostData | undefined>(undefined);

export const usePostContext = () => {
  const context = use(PostContext);

  if (!context) {
    throw new Error(
      "PageContent compound components must be used within PageContent",
    );
  }

  return context;
};

export const PostProvider = PostContext.Provider;
