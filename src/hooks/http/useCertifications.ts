import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { certificationsService } from '@/services';
import { Certification } from '@/services/certifications-service';
import { QUERY_KEYS } from '@/app/constants';

const useCertifications = () =>
  useQuery<Certification[], Error>({
    queryKey: [QUERY_KEYS.CERTIFICATIONS],
    queryFn: certificationsService.getAll,
    staleTime: ms('24h'),
  });

export default useCertifications;
