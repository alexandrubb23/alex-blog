import { getCertifications } from '@/app/api/lib/services';

export async function GET() {
  return getCertifications();
}
