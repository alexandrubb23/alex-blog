import axiosInstance from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';

const useCertifications = () =>
  useQuery({
    queryKey: ['certifications'],
    queryFn: () =>
      axiosInstance
        .get('/certifications/certifications.json')
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useCertifications;
