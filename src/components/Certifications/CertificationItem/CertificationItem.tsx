import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import { Date } from '@/components/common';
import { Certificate } from '@/hooks/useCertifications';
import { useEntitySlug } from '@/hooks';
interface CertificationItemProps {
  certificate: Certificate;
  technologyId: string;
}

const CertificationItem = ({
  certificate,
  technologyId,
}: CertificationItemProps) => {
  const { id, title, completionDate } = certificate;

  const { getSlug } = useEntitySlug('certificates');

  return (
    <Box key={title}>
      <Link href={getSlug({ ...certificate, topic: technologyId })}>
        {title}
      </Link>
      <Box textColor='grey'>
        <Date dateString={completionDate} />
      </Box>
    </Box>
  );
};
export default CertificationItem;
