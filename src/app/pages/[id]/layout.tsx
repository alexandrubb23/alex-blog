import { pageService } from '@/services';
import pageMetadata, { Params } from '@/utils/pageMetadata';

export async function generateMetadata(params: Params) {
  const metadata = await pageMetadata(pageService, params);

  return metadata;
}

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PageLayout;
