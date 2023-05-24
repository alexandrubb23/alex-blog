import { AUTHOR } from '@/app/constants';
import { certificateService } from '@/services';
import pageMetadata, { Params } from '@/utils/pageMetadata';

export async function generateMetadata(params: Params) {
  const metadata = await pageMetadata(certificateService, params);

  return {
    ...metadata,
    description: `${metadata.description} certification - ${AUTHOR.NAME}`,
  };
}

const LayoutCertificate = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutCertificate;
