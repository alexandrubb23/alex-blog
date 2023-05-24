import { AUTHOR } from '@/app/constants';

export async function generateMetadata() {
  return {
    title: `Earned certifications in a wide range of software technologies - ${AUTHOR.NAME}`,
  };
}

const LayoutCertifications = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutCertifications;
