import APIClient from './api-client';

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

const certificationsService = new APIClient<Certification[]>(
  '/certifications/certifications.json'
);

export default certificationsService;
