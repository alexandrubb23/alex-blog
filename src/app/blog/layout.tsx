import { AUTHOR } from '@/app/constants';

export async function generateMetadata() {
  return { title: `Blog - ${AUTHOR.NAME}` };
}

const LayoutContact = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutContact;
