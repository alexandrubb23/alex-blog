import { postsService } from '@/app/api/lib/services';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = postsService.getAll();

  return NextResponse.json(posts);
}
