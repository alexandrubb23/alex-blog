import { ENTITIES } from "@/app/api/lib/constants";
import hydratedPage, { type EntityProps } from "@/app/hydratedPage";

import { Post as PostComponent } from "@/components/Post";

const Post = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.POSTS,
    component: PostComponent,
  });

export default Post;
