import { Box } from '@chakra-ui/react';

import { Date, Link } from '@/components/common';
import { Certificate } from '@/services/certifications-service';
import { useEntitySlugWithPathname } from '@/hooks';
interface CertificationItemProps {
  certificate: Certificate;
  technologyId: string;
}

const CertificationItem = ({
  certificate,
  technologyId,
}: CertificationItemProps) => {
  const { title, completionDate } = certificate;

  const { getSlug } = useEntitySlugWithPathname();

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
