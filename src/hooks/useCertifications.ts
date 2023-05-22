import axiosInstance from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';

export interface Certificate {
  id: string;
  title: string;
  completionDate: string;
}

export interface Certification {
  id: 'git';
  icon: string;
  name: string;
  data: Certificate[];
}

const useCertifications = () =>
  useQuery<Certification[], Error>({
    queryKey: ['certifications'],
    queryFn: () =>
      axiosInstance
        .get<Certification[]>('/certifications/certifications.json')
        .then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useCertifications;
