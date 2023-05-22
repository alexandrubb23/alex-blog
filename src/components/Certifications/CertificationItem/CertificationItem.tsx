import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import { Date } from '@/components/common';
import { Certificate } from '@/hooks/useCertifications';

interface CertificationItemProps {
  certification: Certificate;
  technologyId: string;
}

const CertificationItem = ({
  certification,
  technologyId,
}: CertificationItemProps) => {
  const { id, title, completionDate } = certification;

  return (
    <Box key={title}>
      <Link href={`certifications/${technologyId}/${id}`}>{title}</Link>
      <Box textColor='grey'>
        <Date dateString={completionDate} />
      </Box>
    </Box>
  );
};
export default CertificationItem;
