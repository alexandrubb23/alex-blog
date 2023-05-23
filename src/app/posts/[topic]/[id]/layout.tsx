import { postService } from '@/services';
import pageMetadata, { Params } from '@/utils/pageMetadata';

export async function generateMetadata(params: Params) {
  const metadata = await pageMetadata(postService, params);

  return {
    ...metadata,
    description: `In this article, join Alexandru Barbulescu as he explores the topic of ${metadata.description}.`,
  };
}

const LayoutPost = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPost;
