import { AUTHOR } from '@/app/constants';

export async function generateMetadata() {
  return { title: `Contact - ${AUTHOR.NAME}` };
}

const LayoutContact = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutContact;
