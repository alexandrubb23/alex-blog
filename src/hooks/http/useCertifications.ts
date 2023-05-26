import { useQuery } from '@tanstack/react-query';

import { certificationsService } from '@/services';
import { Certification } from '@/services/certifications-service';


const useCertifications = () =>
  useQuery<Certification[], Error>({
    queryKey: ['certifications'],
    queryFn: certificationsService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useCertifications;
