import { getPosts } from '@/app/api/lib/services';

export async function GET() {
  return getPosts();
}
