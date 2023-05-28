import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { APIResponse } from '@/app/api/lib/models';
import { QUERY_KEYS } from '@/app/constants';
import { certificationsService } from '@/services';

const useCertifications = () =>
  useQuery<APIResponse[], Error>({
    queryKey: [QUERY_KEYS.CERTIFICATIONS],
    queryFn: certificationsService.getAll,
    staleTime: ms('24h'),
  });

export default useCertifications;
